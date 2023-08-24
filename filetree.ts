import { clientStore, editor, space } from "$sb/silverbullet-syscall/mod.ts";

type Tree = {
  [x: string]: null | Dictionary;
};

function pageToTree(pages: string[][]): Tree {
  const buildTree = (tree: Tree, pagePath: string[], index = 0): Tree => {
    const key = pagePath[index];

    if (!tree[key]) {
      tree[key] = index === pagePath.length - 1 ? null : {};
    }

    if (index < pagePath.length - 1) {
      tree[key] = buildTree(tree[key] as Dictionary, pagePath, index + 1);
    }

    return tree;
  };

  return pages.reduce((tree, pagePath) => buildTree(tree, pagePath), {});
}

function treeToHtml(tree: Tree, currentPage: string[]): string {
  let html = "";

  function recurse(path: string[], branch: Tree, depth: number) {
    for (const key in branch) {
      const new_path = [...path, key];
      const full_path = new_path.map(encodeURIComponent).join("/");
      const zipped = new_path.map((k, i) => [k, currentPage[i]]);
      const is_active = zipped.every(([a, b]) => a === b);
      const link = `<a href='/${full_path}' class="${
        is_active ? "active" : ""
      }">${key}</a>`;

      if (branch[key] === null) {
        // Leaf node
        html += `<div class='leaf'>${link}</div>\n`;
      } else {
        // Non-leaf node
        html += `<details depth=${depth} ${is_active ? "open" : ""}>\n`;

        html += `<summary>${link}</summary>\n`;

        recurse(new_path, branch[key], depth + 1);

        html += "</details>\n";
      }
    }
  }

  recurse([], tree, 0);

  return html;
}
async function showFileTree() {
  const currentPage: string[] = (await editor.getCurrentPage()).split("/");
  const pages: string[][] = (await space.listPages()).map((p) =>
    p.name.split("/")
  );
  const html = treeToHtml(
    pageToTree(pages),
    currentPage,
  );

  const css = `
details summary:hover {
  cursor: pointer;
}
details {
  padding-left: 1em;
}

.active {
  color: green;
}

a {
  text-decoration: none;
  color: black;
}

.leaf {
  font-weight: bold;
  padding-left: 2em;
}

summary {
  font-weight: bold;
}
`;

  await editor.showPanel(
    "lhs",
    1,
    `<html><head><style>${css}</style></head><body><div id="root">${html}</div></body></html>`,
  );
}

async function hideFileTree() {
  await editor.hidePanel("lhs");
}

export async function updateTree() {
  const isDisabled = !!(await clientStore.get("disableFileTree"));

  if (!isDisabled) {
    await showFileTree();
  } else {
    await hideFileTree();
  }
}

export async function toggleFileTree() {
  // toggle
  const isDisabled = !!(await clientStore.get("disableFileTree"));
  await clientStore.set("disableFileTree", !isDisabled);
  await updateTree();
}
