(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1226:function(e,t){"use strict";t.byteLength=function(e){var t=d(e),r=t[0],a=t[1];return(r+a)*3/4-a},t.toByteArray=function(e){var t,r,l=d(e),n=l[0],s=l[1],i=new o((n+s)*3/4-s),c=0,u=s>0?n-4:n;for(r=0;r<u;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],i[c++]=t>>16&255,i[c++]=t>>8&255,i[c++]=255&t;return 2===s&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,i[c++]=255&t),1===s&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,i[c++]=t>>8&255,i[c++]=255&t),i},t.fromByteArray=function(e){for(var t,a=e.length,o=a%3,l=[],n=0,s=a-o;n<s;n+=16383)l.push(function(e,t,a){for(var o,l=[],n=t;n<a;n+=3)l.push(r[(o=(e[n]<<16&16711680)+(e[n+1]<<8&65280)+(255&e[n+2]))>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return l.join("")}(e,n,n+16383>s?s:n+16383));return 1===o?l.push(r[(t=e[a-1])>>2]+r[t<<4&63]+"=="):2===o&&l.push(r[(t=(e[a-2]<<8)+e[a-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),l.join("")};for(var r=[],a=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,s=l.length;n<s;++n)r[n]=l[n],a[l.charCodeAt(n)]=n;function d(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var a=r===t?0:4-r%4;return[r,a]}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},1520:function(e,t,r){Promise.resolve().then(r.bind(r,3454))},3454:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var a=r(3288),o=r(2857),l=r(816),n=r(6226),s=r(2031),d=r(9062);let i=e=>navigator.clipboard.writeText(e),c="system",u=(e,t,r)=>{let a=[...e];return a[t]=r,a},x=(e,t)=>{let r=[...e];return r.splice(t,1),r},h=(e,t)=>{let r;switch(t.type){case"SET_EXAMPLES":return t.examples;case"ADD_DEFAULT_EXAMPLE":return[...e,{messages:[{role:c,content:"",tokenCount:0}],tokenCount:0}];case"ADD_EXAMPLE":return[...e,t.example];case"UPDATE_MESSAGE_ROLE":return r=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:u(r,t.messageIndex,{...r[t.messageIndex],role:t.newRole})});case"UPDATE_MESSAGE_CONTENT":let a=e[t.exampleIndex],o=(r=a.messages)[t.messageIndex],l=t.getTokenCount(t.newContent)-o.tokenCount;return u(e,t.exampleIndex,{...e[t.exampleIndex],messages:u(r,t.messageIndex,{...o,content:t.newContent,tokenCount:o.tokenCount+l}),tokenCount:a.tokenCount+l});case"ADD_MESSAGE_TO_EXAMPLE":return r=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:[...r,{role:c,content:"",tokenCount:0}]});case"REMOVE_MESSAGE_FROM_EXAMPLE":return r=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:x(r,t.messageIndex)});case"REMOVE_EXAMPLE":return x(e,t.exampleIndex);default:throw Error("Unknown action type.")}};var m=r(1836),p=e=>{let{onClick:t,disabled:r=!1,children:o,className:l="",ariaLabel:n}=e;return(0,a.jsx)("button",{onClick:t,disabled:r,className:"p-2 whitespace-nowrap rounded ".concat(l),...n?{"aria-label":n}:{},children:o})};let b="p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700";var g=e=>{let{role:t,content:r,rows:o,contentPlaceholder:l,ariaLabel:n,onRoleChange:s,onContentChange:d,removeExample:i}=e,c=e=>{["system","user","assistant"].includes(e)&&s(e)};return(0,a.jsxs)("div",{className:"flex flex-col m-1",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,a.jsxs)("select",{value:t,onChange:e=>c(e.target.value),className:b,"aria-label":"Choose Role",children:[(0,a.jsx)("option",{value:"system",children:"System"}),(0,a.jsx)("option",{value:"user",children:"User"}),(0,a.jsx)("option",{value:"assistant",children:"Assistant"})]}),i&&(0,a.jsx)("button",{onClick:i,className:"px-2 ml-2 rounded text-red-500 dark:text-red-700 hover:text-red-600 active:text-red-700 dark:hover:text-red-600 dark:active:text-red-700  border border-red-500 dark:border-red-700 hover:border-red-600 active:border-red-700 dark:hover:border-red-600 dark:active:border-red-700","aria-label":"Remove This Example",children:"Remove"})]}),(0,a.jsx)("textarea",{placeholder:l,value:r,onChange:e=>d(e.target.value),className:b,...n?{"aria-label":n}:{},rows:o})]})},f=e=>{let{messages:t,onRoleChange:r,onContentChange:o,addMessageToExample:l,removeMessageFromExample:n,removeExample:s,exampleIndex:d}=e;return(0,a.jsxs)("div",{className:"flex space-x-4 mb-1",children:[t.map((e,t)=>(0,a.jsx)(g,{role:e.role,content:e.content,rows:4,contentPlaceholder:"Message Content",onRoleChange:e=>r(d,t,e),onContentChange:e=>o(d,t,e),removeExample:()=>n(d,t),ariaLabel:"Message ".concat(t+1," in Example ").concat(d+1)},t)),(0,a.jsxs)("div",{className:"flex flex-col my-1",children:[(0,a.jsxs)(p,{onClick:()=>l(d),className:"h-1/2 mb-2 text-blue-500 dark:text-blue-700 hover:text-blue-600 active:text-blue-700 dark:hover:text-blue-600 dark:active:text-blue-700 border border-blue-500 dark:border-blue-700 hover:border-blue-600 active:border-blue-700 dark:hover:border-blue-600 dark:active:border-blue-700",ariaLabel:"Add New Message to [".concat(d+1,"] Example"),children:["Add New",(0,a.jsx)("br",{}),"Message"]}),(0,a.jsxs)(p,{onClick:()=>s(d),className:"h-1/2 text-red-500 dark:text-red-700 hover:text-red-600 active:text-red-700 dark:hover:text-red-600 dark:active:text-red-700  border border-red-500 dark:border-red-700 hover:border-red-600 active:border-red-700 dark:hover:border-red-600 dark:active:border-red-700",ariaLabel:"Remove [".concat(d+1,"] Example"),children:["Remove This",(0,a.jsx)("br",{}),"Example"]})]})]})};let k=2*Math.PI*32.5;var v=e=>{let{value:t,max:r}=e;return(0,a.jsxs)("div",{className:"text-gray-500 dark:text-gray-300 relative",children:[(0,a.jsxs)("svg",{width:75,height:75,viewBox:"0 0 ".concat(75," ").concat(75),children:[(0,a.jsx)("circle",{className:t>r?"stroke-red-500 dark:stroke-red-700":"stroke-gray-300 dark:stroke-gray-400",fill:"transparent",strokeWidth:10,r:32.5,cx:37.5,cy:37.5}),0!==t&&t<=r&&(0,a.jsx)("circle",{className:"stroke-blue-500 dark:stroke-blue-700",fill:"transparent",strokeWidth:10,strokeDasharray:k,strokeDashoffset:k-t/r*k,r:32.5,cx:37.5,cy:37.5,transform:"rotate(90 ".concat(37.5," ").concat(37.5,")")})]}),(0,a.jsxs)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-none",children:[t,(0,a.jsx)("span",{className:"text-sm block",children:1!==t?"tokens":"token"})]})]})},y=e=>{let{examples:t,maxTokenCount:r,onMessageRoleChange:o,onMessageContentChange:l,addMessageToExample:n,removeMessageFromExample:s,removeExample:d}=e;return t.map((e,t)=>(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"flex items-center mx-2",children:(0,a.jsx)(v,{value:e.tokenCount,max:r})}),(0,a.jsx)("div",{className:" mb-4 overflow-x-auto",children:(0,a.jsx)(f,{messages:e.messages,onRoleChange:o,onContentChange:l,addMessageToExample:n,removeMessageFromExample:s,exampleIndex:t,removeExample:d})})]},t))};let w=e=>e?"text-gray-300 dark:text-gray-700 cursor-not-allowed border border-gray-300 dark:border-gray-700":"text-yellow-500 hover:text-yellow-600 active:text-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:active:bg-yellow-700 border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700";var E=e=>{let{fileName:t,onFileNameChange:r,handleUpload:o,isUploadDisabled:l,downloadAsJsonl:n,copyToClipboardAsJsonl:s,tokenCount:d,examplesLength:i}=e;return(0,a.jsxs)("header",{className:"container mx-auto sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 flex justify-between items-center whitespace-nowrap overflow-x-auto",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("label",{className:"sr-only",htmlFor:"filenameInput",children:"File Name"}),(0,a.jsx)("input",{id:"filenameInput",type:"text",value:t,onChange:r,className:"p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md m-1 bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700",placeholder:"File Name (JSONL)"}),(0,a.jsx)(p,{onClick:o,className:w(l),disabled:l,children:"Upload"}),(0,a.jsx)(p,{onClick:n,className:"ml-1 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 dark:text-yellow-700 dark:hover:text-yellow-600 dark:active:text-yellow-700 border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700",children:"Download"}),(0,a.jsx)(p,{onClick:s,className:"ml-1 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 dark:text-yellow-700 dark:hover:text-yellow-600 dark:active:text-yellow-700 border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700",children:"Copy to Clipboard"})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"p-2 ml-4 rounded-lg flex-shrink-0 border-2 text-gray-500 dark:text-gray-300 border-gray-400 dark:border-gray-700",children:(0,a.jsxs)("span",{className:"text-xl font-medium",children:[d," token",1!==d?"s":""]})}),(0,a.jsx)("div",{title:i<10?"A minimum of 10 examples is required.":"",className:"border-2 p-2 ml-4 rounded-lg flex-shrink-0 ".concat(i<10?"text-red-500 border-red-400 dark:border-red-700":"text-gray-500 dark:text-gray-300 border-gray-400 dark:border-gray-700"),children:(0,a.jsxs)("span",{className:"text-xl font-medium",children:[i," example",1!==i?"s":""]})})]})]})},j=e=>{let{handleFileDrop:t,handleDragOver:r,fileName:o,handleFileNameChange:l,handleUpload:n,isUploadDisabled:s,copyToClipboardAsJsonl:d,downloadAsJsonl:i,totalTokenCount:c,examples:u,maxTokenCount:x,onMessageRoleChange:h,onMessageContentChange:b,addMessageToExample:f,removeMessageFromExample:k,removeExample:v,addNewExample:w,showFirstMessage:j,setShowFirstMessage:C,defaultFirstRole:N,setDefaultFirstRole:A,defaultFirstMessage:M,setDefaultFirstMessage:_}=e;return(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 min-h-screen",onDrop:t,onDragOver:r,children:[(0,a.jsx)(E,{fileName:o,onFileNameChange:l,handleUpload:n,isUploadDisabled:s,downloadAsJsonl:i,copyToClipboardAsJsonl:d,tokenCount:c,examplesLength:u.length}),(0,a.jsxs)("main",{className:"container mx-auto pt-0 pr-4 pb-4 pl-4",children:[(0,a.jsx)("div",{className:"ml-1",children:(0,a.jsx)(m.Z,{checked:j,onChange:C,label:"Set default first message"})}),j&&(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(g,{role:N,content:M,rows:2,contentPlaceholder:"First Message Content",onRoleChange:e=>{A(e)},onContentChange:e=>{_(e)},ariaLabel:"First Message Content"})}),(0,a.jsx)(y,{examples:u,maxTokenCount:x,onMessageRoleChange:h,onMessageContentChange:b,addMessageToExample:f,removeMessageFromExample:k,removeExample:v}),(0,a.jsx)(p,{onClick:w,className:"ml-1 mb-10 text-blue-500 dark:text-blue-700 hover:text-blue-600 active:text-blue-700 dark:hover:text-blue-600 dark:active:text-blue-700 border border-blue-500 dark:border-blue-700 hover:border-blue-600 active:border-blue-700 dark:hover:border-blue-600 dark:active:border-blue-700",ariaLabel:"Add New Example",children:"Add New Example"})]})]})};let C=(0,d.bZ)("cl100k_base"),N=e=>C.encode(e).length,A=e=>({...e,tokenCount:C.encode(e.content).length}),M=e=>{let t=e.messages.map(A);return{messages:t,tokenCount:t.reduce((e,t)=>e+t.tokenCount,0)}},_=e=>({...e}),S=e=>({messages:e.messages.map(_)}),T=e=>{let t=[{messages:[{role:c,content:"",tokenCount:0}],tokenCount:0}];if(!e)return t;try{return e.split("\n").map(e=>{let t=JSON.parse(e);return M(t)})}catch(e){return t}},D=e=>{e.preventDefault(),e.returnValue=""},O=e=>e.reduce((e,t)=>e+t.tokenCount,0),R=e=>{e.preventDefault()};var L=e=>{let{fileName:t,dataset:r}=e,[l,s]=(0,o.useState)(t),[d,u]=(0,o.useReducer)(h,T(r)),[x,m]=(0,o.useState)(!0),[p,b]=(0,o.useState)(c),[g,f]=(0,o.useState)(""),[k,v]=(0,o.useState)(0),[y,w]=(0,o.useState)(null),[E,A]=(0,o.useState)(!1),[M,_]=(0,o.useState)(0);(0,o.useEffect)(()=>{var e,t;w(null!==(t=null===(e=(0,n.Pi)())||void 0===e?void 0:e.trim())&&void 0!==t?t:null)},[]),(0,o.useEffect)(()=>{A(!y||0===l.length||0===d.length)},[y,l,d]),(0,o.useEffect)(()=>(window.addEventListener("beforeunload",D),()=>{window.removeEventListener("beforeunload",D)}),[]),(0,o.useEffect)(()=>{_(O(d))},[d]),(0,o.useEffect)(()=>{v(C.encode(g).length)},[g]);let L=()=>d.map(e=>JSON.stringify(S(e))).join("\n"),I=e=>new Blob([e],{type:"application/jsonl"}),P=async e=>{e.preventDefault();let t=e.dataTransfer.files;if(0===t.length||!window.confirm("Are you sure you want to overwrite the content with this file?"))return;let r=t[0],a=new FileReader;a.onload=e=>{var t;u({type:"SET_EXAMPLES",examples:T(null===(t=e.target)||void 0===t?void 0:t.result)})},a.readAsText(r)};async function F(){let e=I(L()),t=new FormData;t.append("file",e,l),t.append("purpose","fine-tune");try{let e=await fetch("https://api.openai.com/v1/files",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(y)},body:t});if(!e.ok)throw Error("Failed to upload data: ".concat(e.statusText));let r=await e.json();console.log("Data uploaded successfully:",r)}catch(e){console.error("Error uploading data:",e)}}return(0,a.jsx)(j,{handleFileDrop:P,handleDragOver:R,fileName:l,handleFileNameChange:e=>{s(e.target.value.trim())},handleUpload:F,isUploadDisabled:E,copyToClipboardAsJsonl:()=>{i(L())},downloadAsJsonl:()=>{let e=I(L()),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r)},totalTokenCount:M,examples:d,maxTokenCount:16385,onMessageRoleChange:(e,t,r)=>{u({type:"UPDATE_MESSAGE_ROLE",exampleIndex:e,messageIndex:t,newRole:r})},onMessageContentChange:(e,t,r)=>{u({type:"UPDATE_MESSAGE_CONTENT",exampleIndex:e,messageIndex:t,newContent:r,getTokenCount:N})},addMessageToExample:e=>{u({type:"ADD_MESSAGE_TO_EXAMPLE",exampleIndex:e})},removeMessageFromExample:(e,t)=>{u({type:"REMOVE_MESSAGE_FROM_EXAMPLE",exampleIndex:e,messageIndex:t})},removeExample:e=>{u({type:"REMOVE_EXAMPLE",exampleIndex:e})},addNewExample:()=>{x?u({type:"ADD_EXAMPLE",example:{messages:[{role:p,content:g,tokenCount:k}],tokenCount:k}}):u({type:"ADD_DEFAULT_EXAMPLE"})},showFirstMessage:x,setShowFirstMessage:m,defaultFirstRole:p,setDefaultFirstRole:b,defaultFirstMessage:g,setDefaultFirstMessage:f})},I=()=>{var e;let t=(0,l.useSearchParams)(),r=t.get("id"),d=null!==(e=t.get("name"))&&void 0!==e?e:"",[i,c]=(0,o.useState)(!0),[u,x]=(0,o.useState)(),h=async()=>{if(!r){c(!1);return}let e={headers:{Authorization:"Bearer ".concat((0,n.Pi)())}};try{let t=await fetch("https://api.openai.com/v1/files/".concat(r,"/content"),e);if(!t.ok)throw Error("Failed to fetch data");let a=await t.text();x(a)}catch(e){console.error(e)}finally{c(!1)}};return((0,o.useEffect)(()=>{h()},[]),i)?(0,a.jsx)(s.Z,{}):(0,a.jsx)(L,{fileName:d,dataset:u})}},2031:function(e,t,r){"use strict";var a=r(3288);t.Z=()=>(0,a.jsxs)("div",{className:"flex justify-center items-center min-h-screen space-x-4 dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 dark:border-white"}),(0,a.jsx)("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Loading..."})]})},1836:function(e,t,r){"use strict";var a=r(3288);r(2857),t.Z=e=>{let{checked:t,onChange:r,label:o}=e;return(0,a.jsx)("div",{className:"mb-4 flex items-center",children:(0,a.jsxs)("label",{htmlFor:"toggle-switch",className:"flex items-center cursor-pointer",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:t,onChange:e=>r(e.target.checked),className:"sr-only","aria-labelledby":"toggle-label"}),(0,a.jsx)("div",{className:"block w-10 h-6 rounded-full ".concat(t?"bg-green-500":"bg-gray-400")}),(0,a.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ".concat(t?"transform translate-x-full":"")})]}),(0,a.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",children:o})]})})}},6226:function(e,t,r){"use strict";r.d(t,{Pi:function(){return o},ks:function(){return a},uB:function(){return l}});let a=e=>{sessionStorage.setItem("apiKey",e)},o=()=>sessionStorage.getItem("apiKey"),l=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},3912:function(e,t,r){"use strict";var a=r(2857),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,d={},i=null,c=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:o,type:e,key:i,ref:c,props:d,_owner:n.current}}t.jsx=d,t.jsxs=d},3288:function(e,t,r){"use strict";e.exports=r(3912)},816:function(e,t,r){e.exports=r(7314)},8208:function(e,t,r){"use strict";r.d(t,{Fi:function(){return d},OU:function(){return c}});var a,o,l,n=r(1226),s=Object.defineProperty;function d(e){}var i=class{specialTokens;inverseSpecialTokens;patStr;textEncoder=new TextEncoder;textDecoder=new TextDecoder("utf-8");rankMap=new Map;textMap=new Map;constructor(e,t){for(let[t,r]of(this.patStr=e.pat_str,Object.entries(e.bpe_ranks.split("\n").filter(Boolean).reduce((e,t)=>{let[r,a,...o]=t.split(" "),l=Number.parseInt(a,10);return o.forEach((t,r)=>e[t]=l+r),e},{})))){let e=n.toByteArray(t);this.rankMap.set(e.join(","),r),this.textMap.set(r,e)}this.specialTokens={...e.special_tokens,...t},this.inverseSpecialTokens=Object.entries(this.specialTokens).reduce((e,[t,r])=>(e[r]=this.textEncoder.encode(t),e),{})}encode(e,t=[],r="all"){let a=RegExp(this.patStr,"ug"),o=i.specialTokenRegex(Object.keys(this.specialTokens)),l=[],n=new Set("all"===t?Object.keys(this.specialTokens):t),s=new Set("all"===r?Object.keys(this.specialTokens).filter(e=>!n.has(e)):r);if(s.size>0){let t=i.specialTokenRegex([...s]),r=e.match(t);if(null!=r)throw Error(`The text contains a special token that is not allowed: ${r[0]}`)}let d=0;for(;;){let t=null,r=d;for(;o.lastIndex=r,!(null==(t=o.exec(e))||n.has(t[0]));)r=t.index+1;let s=t?.index??e.length;for(let t of e.substring(d,s).matchAll(a)){let e=this.textEncoder.encode(t[0]),r=this.rankMap.get(e.join(","));if(null!=r){l.push(r);continue}l.push(...function(e,t){return 1===e.length?[t.get(e.join(","))]:(function(e,t){let r=Array.from({length:e.length},(e,t)=>({start:t,end:t+1}));for(;r.length>1;){let a=null;for(let o=0;o<r.length-1;o++){let l=e.slice(r[o].start,r[o+1].end),n=t.get(l.join(","));null!=n&&(null==a||n<a[0])&&(a=[n,o])}if(null!=a){let e=a[1];r[e]={start:r[e].start,end:r[e+1].end},r.splice(e+1,1)}else break}return r})(e,t).map(r=>t.get(e.slice(r.start,r.end).join(","))).filter(e=>null!=e)}(e,this.rankMap))}if(null==t)break;let i=this.specialTokens[t[0]];l.push(i),d=t.index+t[0].length}return l}decode(e){let t=[],r=0;for(let a=0;a<e.length;++a){let o=e[a],l=this.textMap.get(o)??this.inverseSpecialTokens[o];null!=l&&(t.push(l),r+=l.length)}let a=new Uint8Array(r),o=0;for(let e of t)a.set(e,o),o+=e.length;return this.textDecoder.decode(a)}},c=i;a="symbol"!=typeof(l="specialTokenRegex")?l+"":l,o=e=>RegExp(e.map(e=>e.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&")).join("|"),"g"),a in c?s(c,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[a]=o}},function(e){e.O(0,[222,478,754,744],function(){return e(e.s=1520)}),_N_E=e.O()}]);