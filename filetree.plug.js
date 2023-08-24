var mod=(()=>{var y=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var u=(e,t)=>{for(var o in t)y(e,o,{get:t[o],enumerable:!0})},B=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of R(t))!E.call(e,i)&&i!==o&&y(e,i,{get:()=>t[i],enumerable:!(n=S(t,i))||n.enumerable});return e};var D=e=>B(y({},"__esModule",{value:!0}),e);var Ne={};u(Ne,{functionMapping:()=>k});function A(e){let t=atob(e),o=t.length,n=new Uint8Array(o);for(let i=0;i<o;i++)n[i]=t.charCodeAt(i);return n}function P(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",o=e.byteLength;for(let n=0;n<o;n++)t+=String.fromCharCode(e[n]);return btoa(t)}async function $(e,t){if(typeof e!="string"){let o=new Uint8Array(await e.arrayBuffer()),n=o.length>0?P(o):void 0;t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:n},e=e.url}return syscall("sandboxFetch.fetch",e,t)}function T(){globalThis.nativeFetch=globalThis.fetch,globalThis.fetch=async function(e,t){let o=t&&t.body?P(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await $(e,t&&{method:t.method,headers:t.headers,base64Body:o});return new Response(n.base64Body?A(n.base64Body):null,{status:n.status,headers:n.headers})}}typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var h=new Map,x=0;function d(e){self.postMessage(e)}self.syscall=async(e,...t)=>await new Promise((o,n)=>{x++,h.set(x,{resolve:o,reject:n}),d({type:"sys",id:x,name:e,args:t})});function M(e,t){self.addEventListener("message",o=>{(async()=>{let n=o.data;switch(n.type){case"inv":{let i=e[n.name];if(!i)throw new Error(`Function not loaded: ${n.name}`);try{let s=await Promise.resolve(i(...n.args||[]));d({type:"invr",id:n.id,result:s})}catch(s){console.error(s),d({type:"invr",id:n.id,error:s.message})}}break;case"sysr":{let i=n.id,s=h.get(i);if(!s)throw Error("Invalid request id");h.delete(i),n.error?s.reject(new Error(n.error)):s.resolve(n.result)}break}})().catch(console.error)}),d({type:"manifest",manifest:t})}T();var a={};u(a,{confirm:()=>oe,dispatch:()=>re,downloadFile:()=>W,filterBox:()=>G,flashNotification:()=>H,fold:()=>ce,foldAll:()=>de,getCurrentPage:()=>I,getCursor:()=>L,getSelection:()=>_,getText:()=>q,getUiOption:()=>ie,hidePanel:()=>X,insertAtCursor:()=>te,insertAtPos:()=>Y,moveCursor:()=>ee,navigate:()=>z,openUrl:()=>V,prompt:()=>ne,reloadPage:()=>K,reloadUI:()=>Q,replaceRange:()=>Z,save:()=>N,setPage:()=>O,setSelection:()=>j,setUiOption:()=>se,showPanel:()=>J,toggleFold:()=>ue,unfold:()=>le,unfoldAll:()=>me,vimEx:()=>ae});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});var r=self.syscall;function I(){return r("editor.getCurrentPage")}function O(e){return r("editor.setPage",e)}function q(){return r("editor.getText")}function L(){return r("editor.getCursor")}function _(){return r("editor.getSelection")}function j(e,t){return r("editor.setSelection",e,t)}function N(){return r("editor.save")}function z(e,t,o=!1,n=!1){return r("editor.navigate",e,t,o,n)}function K(){return r("editor.reloadPage")}function Q(){return r("editor.reloadUI")}function V(e,t=!1){return r("editor.openUrl",e,t)}function W(e,t){return r("editor.downloadFile",e,t)}function H(e,t="info"){return r("editor.flashNotification",e,t)}function G(e,t,o="",n=""){return r("editor.filterBox",e,t,o,n)}function J(e,t,o,n=""){return r("editor.showPanel",e,t,o,n)}function X(e){return r("editor.hidePanel",e)}function Y(e,t){return r("editor.insertAtPos",e,t)}function Z(e,t,o){return r("editor.replaceRange",e,t,o)}function ee(e,t=!1){return r("editor.moveCursor",e,t)}function te(e){return r("editor.insertAtCursor",e)}function re(e){return r("editor.dispatch",e)}function ne(e,t=""){return r("editor.prompt",e,t)}function oe(e){return r("editor.confirm",e)}function ie(e){return r("editor.getUiOption",e)}function se(e,t){return r("editor.setUiOption",e,t)}function ae(e){return r("editor.vimEx",e)}function ce(){return r("editor.fold")}function le(){return r("editor.unfold")}function ue(){return r("editor.toggleFold")}function de(){return r("editor.foldAll")}function me(){return r("editor.unfoldAll")}var m={};u(m,{deleteAttachment:()=>Te,deleteFile:()=>Se,deletePage:()=>he,getAttachmentMeta:()=>we,getFileMeta:()=>ke,getPageMeta:()=>ye,listAttachments:()=>ve,listFiles:()=>Me,listPages:()=>ge,listPlugs:()=>be,readAttachment:()=>Fe,readFile:()=>Ue,readPage:()=>Pe,writeAttachment:()=>Ae,writeFile:()=>Ce,writePage:()=>xe});function ge(e=!1){return r("space.listPages",e)}function ye(e){return r("space.getPageMeta",e)}function Pe(e){return r("space.readPage",e)}function xe(e,t){return r("space.writePage",e,t)}function he(e){return r("space.deletePage",e)}function be(){return r("space.listPlugs")}function ve(){return r("space.listAttachments")}function we(e){return r("space.getAttachmentMeta",e)}function Fe(e){return r("space.readAttachment",e)}function Ae(e,t){return r("space.writeAttachment",e,t)}function Te(e){return r("space.deleteAttachment",e)}function Me(){return r("space.listFiles")}function Ue(e){return r("space.readFile",e)}function ke(e){return r("space.getFileMeta",e)}function Ce(e,t){return r("space.writeFile",e,t)}function Se(e){return r("space.deleteFile",e)}var c={};u(c,{del:()=>De,get:()=>Be,set:()=>Ee});function Ee(e,t){return r("clientStore.set",e,t)}function Be(e){return r("clientStore.get",e)}function De(e){return r("clientStore.delete",e)}function Oe(e){let t=(o,n,i=0)=>{let s=n[i];return o[s]||(o[s]=i===n.length-1?null:{}),i<n.length-1&&(o[s]=t(o[s],n,i+1)),o};return e.reduce((o,n)=>t(o,n),{})}function qe(e,t){let o="";function n(i,s,v){for(let l in s){let f=[...i,l],C=f.map(encodeURIComponent).join("/"),w=f.map((p,g)=>[p,t[g]]).every(([p,g])=>p===g),F=`<a href='/${C}' class="${w?"active":""}">${l}</a>`;s[l]===null?o+=`<div class='leaf'>${F}</div>
`:(o+=`<details depth=${v} ${w?"open":""}>
`,o+=`<summary>${F}</summary>
`,n(f,s[l],v+1),o+=`</details>
`)}}return n([],e,0),o}async function Le(){let e=(await a.getCurrentPage()).split("/"),t=(await m.listPages()).map(i=>i.name.split("/")),o=qe(Oe(t),e),n=`
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
`;await a.showPanel("lhs",1,`<html><head><style>${n}</style></head><body><div id="root">${o}</div></body></html>`)}async function _e(){await a.hidePanel("lhs")}async function b(){!!await c.get("disableFileTree")?await _e():await Le()}async function U(){let e=!!await c.get("disableFileTree");await c.set("disableFileTree",!e),await b()}var k={fileTree:U,updateTree:b},je={name:"filetree",functions:{fileTree:{path:"filetree.ts:toggleFileTree",command:{name:"Toggle file tree"}},updateTree:{path:"filetree.ts:updateTree",events:["editor:pageLoaded"]}},assets:{}};M(k,je);return D(Ne);})();