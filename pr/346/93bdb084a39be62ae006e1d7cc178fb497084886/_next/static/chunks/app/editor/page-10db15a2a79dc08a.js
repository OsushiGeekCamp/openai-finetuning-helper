(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1226:function(e,t){"use strict";t.byteLength=function(e){var t=i(e),a=t[0],r=t[1];return(a+r)*3/4-r},t.toByteArray=function(e){var t,a,n=i(e),l=n[0],o=n[1],c=new s((l+o)*3/4-o),d=0,u=o>0?l-4:l;for(a=0;a<u;a+=4)t=r[e.charCodeAt(a)]<<18|r[e.charCodeAt(a+1)]<<12|r[e.charCodeAt(a+2)]<<6|r[e.charCodeAt(a+3)],c[d++]=t>>16&255,c[d++]=t>>8&255,c[d++]=255&t;return 2===o&&(t=r[e.charCodeAt(a)]<<2|r[e.charCodeAt(a+1)]>>4,c[d++]=255&t),1===o&&(t=r[e.charCodeAt(a)]<<10|r[e.charCodeAt(a+1)]<<4|r[e.charCodeAt(a+2)]>>2,c[d++]=t>>8&255,c[d++]=255&t),c},t.fromByteArray=function(e){for(var t,r=e.length,s=r%3,n=[],l=0,o=r-s;l<o;l+=16383)n.push(function(e,t,r){for(var s,n=[],l=t;l<r;l+=3)n.push(a[(s=(e[l]<<16&16711680)+(e[l+1]<<8&65280)+(255&e[l+2]))>>18&63]+a[s>>12&63]+a[s>>6&63]+a[63&s]);return n.join("")}(e,l,l+16383>o?o:l+16383));return 1===s?n.push(a[(t=e[r-1])>>2]+a[t<<4&63]+"=="):2===s&&n.push(a[(t=(e[r-2]<<8)+e[r-1])>>10]+a[t>>4&63]+a[t<<2&63]+"="),n.join("")};for(var a=[],r=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,o=n.length;l<o;++l)a[l]=n[l],r[n.charCodeAt(l)]=l;function i(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var a=e.indexOf("=");-1===a&&(a=t);var r=a===t?0:4-a%4;return[a,r]}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},1520:function(e,t,a){Promise.resolve().then(a.bind(a,8411))},8411:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var r=a(3288),s=a(2857),n=a(816),l=a(6226),o=a(2031),i=a(9062);let c=e=>navigator.clipboard.writeText(e),d="system",u=(e,t,a)=>{let r=[...e];return r[t]=a,r},h=(e,t)=>{let a=[...e];return a.splice(t,1),a},p=(e,t)=>{let a;switch(t.type){case"SET_EXAMPLES":return t.examples;case"ADD_DEFAULT_EXAMPLE":return[...e,{messages:[{role:d,content:""}]}];case"ADD_EXAMPLE":return[...e,t.example];case"UPDATE_MESSAGE":return a=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:u(a,t.messageIndex,t.message)});case"ADD_MESSAGE_TO_EXAMPLE":return a=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:[...a,{role:d,content:""}]});case"REMOVE_MESSAGE_FROM_EXAMPLE":return a=e[t.exampleIndex].messages,u(e,t.exampleIndex,{...e[t.exampleIndex],messages:h(a,t.messageIndex)});case"REMOVE_EXAMPLE":return h(e,t.exampleIndex);default:throw Error("Unknown action type.")}};var g=a(1836),m=e=>{let{onClick:t,disabled:a=!1,children:s,className:n="",ariaLabel:l}=e;return(0,r.jsx)("button",{onClick:t,disabled:a,className:"p-2 whitespace-nowrap rounded ".concat(n),...l?{"aria-label":l}:{},children:s})};let x="p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700";var f=e=>{let{role:t,content:a,rows:s,contentPlaceholder:n,ariaLabel:l,onRoleChange:o,removeExample:i}=e,c=e=>{["system","user","assistant"].includes(e)&&o({role:e,content:a})},d=e=>{o({role:t,content:e})};return(0,r.jsxs)("div",{className:"flex flex-col m-1",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,r.jsxs)("select",{value:t,onChange:e=>c(e.target.value),className:x,"aria-label":"Choose Role",children:[(0,r.jsx)("option",{value:"system",children:"System"}),(0,r.jsx)("option",{value:"user",children:"User"}),(0,r.jsx)("option",{value:"assistant",children:"Assistant"})]}),i&&(0,r.jsx)("button",{onClick:i,className:"px-2 ml-2 bg-red-500 text-white rounded dark:bg-red-700 hover:bg-red-600 active:bg-red-700","aria-label":"Remove This Example",children:"Remove"})]}),(0,r.jsx)("textarea",{placeholder:n,value:a,onChange:e=>d(e.target.value),className:x,...l?{"aria-label":l}:{},rows:s})]})},b=e=>{let{messages:t,updateMessageInExample:a,addMessageToExample:s,removeMessageFromExample:n,removeExample:l,exampleIndex:o}=e;return(0,r.jsxs)("div",{className:"flex space-x-4 mb-1",children:[t.map((e,t)=>(0,r.jsx)(f,{role:e.role,content:e.content,rows:4,contentPlaceholder:"Message Content",onRoleChange:e=>a(o,t,e),removeExample:()=>n(o,t),ariaLabel:"Message ".concat(t+1," in Example ").concat(o+1)},t)),(0,r.jsxs)("div",{className:"flex flex-col my-1",children:[(0,r.jsxs)(m,{onClick:()=>s(o),className:"h-1/2 bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 active:bg-blue-700 mb-2",ariaLabel:"Add New Message to [".concat(o+1,"] Example"),children:["Add New",(0,r.jsx)("br",{}),"Message"]}),(0,r.jsxs)(m,{onClick:()=>l(o),className:"h-1/2 bg-red-500 text-white dark:bg-red-700 hover:bg-red-600 active:bg-red-700",ariaLabel:"Remove [".concat(o+1,"] Example"),children:["Remove This",(0,r.jsx)("br",{}),"Example"]})]})]})},v=e=>{let{examples:t,updateMessageInExample:a,addMessageToExample:s,removeMessageFromExample:n,removeExample:l}=e;return(0,r.jsx)("div",{children:t.map((e,t)=>(0,r.jsx)("div",{className:"mb-4 overflow-x-auto",children:(0,r.jsx)(b,{messages:e.messages,updateMessageInExample:a,addMessageToExample:s,removeMessageFromExample:n,exampleIndex:t,removeExample:l})},t))})};let y=e=>e?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600 dark:active:bg-orange-700";var E=e=>{let{fileName:t,onFileNameChange:a,handleUpload:s,isUploadDisabled:n,downloadAsJsonl:l,copyToClipboardAsJsonl:o,tokenCount:i,examplesLength:c}=e;return(0,r.jsxs)("header",{className:"container mx-auto sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 flex justify-between items-center whitespace-nowrap overflow-x-auto",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("label",{className:"sr-only",htmlFor:"filenameInput",children:"File Name"}),(0,r.jsx)("input",{id:"filenameInput",type:"text",value:t,onChange:a,className:"p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md m-1 bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700",placeholder:"File Name (JSONL)"}),(0,r.jsx)(m,{onClick:s,className:y(n),disabled:n,children:"Upload"}),(0,r.jsx)(m,{onClick:l,className:"ml-1 bg-green-500 text-white hover:bg-green-600 active:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:active:bg-green-700",children:"Download"}),(0,r.jsx)(m,{onClick:o,className:"ml-1 bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:active:bg-yellow-700",children:"Copy to Clipboard"})]}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"bg-gray-200 dark:bg-gray-700 p-2 ml-4 rounded-lg flex-shrink-0",children:(0,r.jsxs)("span",{className:"text-xl font-medium",children:[i," token",1!==i?"s":""]})}),(0,r.jsx)("div",{title:c<10?"A minimum of 10 examples is required.":"",className:"bg-gray-200 dark:bg-gray-700 p-2 ml-4 rounded-lg flex-shrink-0 ".concat(length<10?"text-red-500":""),children:(0,r.jsxs)("span",{className:"text-xl font-medium",children:[c," example",1!==c?"s":""]})})]})]})},k=e=>{let{handleFileDrop:t,handleDragOver:a,fileName:s,handleFileNameChange:n,handleUpload:l,isUploadDisabled:o,copyToClipboardAsJsonl:i,downloadAsJsonl:c,totalTokenCount:d,examples:u,updateMessageInExample:h,addMessageToExample:p,removeMessageFromExample:x,removeExample:b,addNewExample:y,showFirstMessage:k,setShowFirstMessage:w,defaultFirstRole:j,setDefaultFirstRole:A,defaultFirstMessage:N,setDefaultFirstMessage:M}=e;return(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 min-h-screen",onDrop:t,onDragOver:a,children:[(0,r.jsx)(E,{fileName:s,onFileNameChange:n,handleUpload:l,isUploadDisabled:o,downloadAsJsonl:c,copyToClipboardAsJsonl:i,tokenCount:d,examplesLength:u.length}),(0,r.jsxs)("main",{className:"container mx-auto pt-0 pr-4 pb-4 pl-4",children:[(0,r.jsx)("div",{className:"ml-1",children:(0,r.jsx)(g.Z,{checked:k,onChange:w,label:"Set default first message"})}),k&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(f,{role:j,content:N,rows:2,contentPlaceholder:"First Message Content",onRoleChange:e=>{A(e.role),M(e.content)},ariaLabel:"First Message Content"})}),(0,r.jsx)(v,{examples:u,updateMessageInExample:h,addMessageToExample:p,removeMessageFromExample:x,removeExample:b}),(0,r.jsx)(m,{onClick:y,className:"bg-green-500 ml-1 text-white dark:bg-green-700 hover:bg-green-600 active:bg-green-700",ariaLabel:"Add New Example",children:"Add New Example"})]})]})};let w=(0,i.bZ)("cl100k_base"),j=e=>{let t=[{messages:[{role:d,content:""}]}];if(!e)return t;try{return e.split("\n").map(e=>JSON.parse(e))}catch(e){return t}},A=e=>e.reduce((e,t)=>e+t.messages.reduce((e,t)=>e+w.encode(t.content).length,0),0),N=e=>{e.preventDefault()};var M=e=>{let{fileName:t,dataset:a}=e,[n,o]=(0,s.useState)(t),[i,u]=(0,s.useReducer)(p,j(a)),[h,g]=(0,s.useState)(!0),[m,x]=(0,s.useState)(d),[f,b]=(0,s.useState)(""),[v,y]=(0,s.useState)(null),[E,w]=(0,s.useState)(!1),[M,_]=(0,s.useState)(0);(0,s.useEffect)(()=>{var e,t;y(null!==(t=null===(e=(0,l.Pi)())||void 0===e?void 0:e.trim())&&void 0!==t?t:null)},[]),(0,s.useEffect)(()=>{w(!v||0===n.length||0===i.length)},[v,n,i]),(0,s.useEffect)(()=>{_(A(i))},[i]);let S=()=>i.map(e=>JSON.stringify(e)).join("\n"),C=e=>new Blob([e],{type:"application/jsonl"}),T=async e=>{e.preventDefault();let t=e.dataTransfer.files;if(0===t.length||!window.confirm("Are you sure you want to overwrite the content with this file?"))return;let a=t[0],r=new FileReader;r.onload=e=>{var t;u({type:"SET_EXAMPLES",examples:j(null===(t=e.target)||void 0===t?void 0:t.result)})},r.readAsText(a)};async function D(){let e=C(S()),t=new FormData;t.append("file",e,n),t.append("purpose","fine-tune");try{let e=await fetch("https://api.openai.com/v1/files",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v)},body:t});if(!e.ok)throw Error("Failed to upload data: ".concat(e.statusText));let a=await e.json();console.log("Data uploaded successfully:",a)}catch(e){console.error("Error uploading data:",e)}}return(0,r.jsx)(k,{handleFileDrop:T,handleDragOver:N,fileName:n,handleFileNameChange:e=>{o(e.target.value.trim())},handleUpload:D,isUploadDisabled:E,copyToClipboardAsJsonl:()=>{c(S())},downloadAsJsonl:()=>{let e=C(S()),t=URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download=n,document.body.appendChild(a),a.click(),document.body.removeChild(a)},totalTokenCount:M,examples:i,updateMessageInExample:(e,t,a)=>{u({type:"UPDATE_MESSAGE",exampleIndex:e,messageIndex:t,message:a})},addMessageToExample:e=>{u({type:"ADD_MESSAGE_TO_EXAMPLE",exampleIndex:e})},removeMessageFromExample:(e,t)=>{u({type:"REMOVE_MESSAGE_FROM_EXAMPLE",exampleIndex:e,messageIndex:t})},removeExample:e=>{u({type:"REMOVE_EXAMPLE",exampleIndex:e})},addNewExample:()=>{h?u({type:"ADD_EXAMPLE",example:{messages:[{role:m,content:f}]}}):u({type:"ADD_DEFAULT_EXAMPLE"})},showFirstMessage:h,setShowFirstMessage:g,defaultFirstRole:m,setDefaultFirstRole:x,defaultFirstMessage:f,setDefaultFirstMessage:b})},_=()=>{var e;let t=(0,n.useSearchParams)(),a=t.get("id"),i=null!==(e=t.get("name"))&&void 0!==e?e:"",[c,d]=(0,s.useState)(!0),[u,h]=(0,s.useState)(),p=async()=>{if(!a){d(!1);return}let e={headers:{Authorization:"Bearer ".concat((0,l.Pi)())}};try{let t=await fetch("https://api.openai.com/v1/files/".concat(a,"/content"),e);if(!t.ok)throw Error("Failed to fetch data");let r=await t.text();h(r)}catch(e){console.error(e)}finally{d(!1)}};return((0,s.useEffect)(()=>{p()},[]),c)?(0,r.jsx)(o.Z,{}):(0,r.jsx)(M,{fileName:i,dataset:u})}},2031:function(e,t,a){"use strict";var r=a(3288);t.Z=()=>(0,r.jsxs)("div",{className:"flex justify-center items-center min-h-screen space-x-4 dark:bg-gray-800",children:[(0,r.jsx)("div",{className:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 dark:border-white"}),(0,r.jsx)("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Loading..."})]})},1836:function(e,t,a){"use strict";var r=a(3288);a(2857),t.Z=e=>{let{checked:t,onChange:a,label:s}=e;return(0,r.jsx)("div",{className:"mb-4 flex items-center",children:(0,r.jsxs)("label",{htmlFor:"toggle-switch",className:"flex items-center cursor-pointer",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:t,onChange:e=>a(e.target.checked),className:"sr-only","aria-labelledby":"toggle-label"}),(0,r.jsx)("div",{className:"block w-10 h-6 rounded-full ".concat(t?"bg-green-500":"bg-gray-400")}),(0,r.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ".concat(t?"transform translate-x-full":"")})]}),(0,r.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",children:s})]})})}},6226:function(e,t,a){"use strict";a.d(t,{Pi:function(){return s},ks:function(){return r},uB:function(){return n}});let r=e=>{sessionStorage.setItem("apiKey",e)},s=()=>sessionStorage.getItem("apiKey"),n=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},3912:function(e,t,a){"use strict";var r=a(2857),s=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var r,i={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:l.current}}t.jsx=i,t.jsxs=i},3288:function(e,t,a){"use strict";e.exports=a(3912)},816:function(e,t,a){e.exports=a(7314)},8208:function(e,t,a){"use strict";a.d(t,{Fi:function(){return i},OU:function(){return d}});var r,s,n,l=a(1226),o=Object.defineProperty;function i(e){}var c=class{specialTokens;inverseSpecialTokens;patStr;textEncoder=new TextEncoder;textDecoder=new TextDecoder("utf-8");rankMap=new Map;textMap=new Map;constructor(e,t){for(let[t,a]of(this.patStr=e.pat_str,Object.entries(e.bpe_ranks.split("\n").filter(Boolean).reduce((e,t)=>{let[a,r,...s]=t.split(" "),n=Number.parseInt(r,10);return s.forEach((t,a)=>e[t]=n+a),e},{})))){let e=l.toByteArray(t);this.rankMap.set(e.join(","),a),this.textMap.set(a,e)}this.specialTokens={...e.special_tokens,...t},this.inverseSpecialTokens=Object.entries(this.specialTokens).reduce((e,[t,a])=>(e[a]=this.textEncoder.encode(t),e),{})}encode(e,t=[],a="all"){let r=RegExp(this.patStr,"ug"),s=c.specialTokenRegex(Object.keys(this.specialTokens)),n=[],l=new Set("all"===t?Object.keys(this.specialTokens):t),o=new Set("all"===a?Object.keys(this.specialTokens).filter(e=>!l.has(e)):a);if(o.size>0){let t=c.specialTokenRegex([...o]),a=e.match(t);if(null!=a)throw Error(`The text contains a special token that is not allowed: ${a[0]}`)}let i=0;for(;;){let t=null,a=i;for(;s.lastIndex=a,!(null==(t=s.exec(e))||l.has(t[0]));)a=t.index+1;let o=t?.index??e.length;for(let t of e.substring(i,o).matchAll(r)){let e=this.textEncoder.encode(t[0]),a=this.rankMap.get(e.join(","));if(null!=a){n.push(a);continue}n.push(...function(e,t){return 1===e.length?[t.get(e.join(","))]:(function(e,t){let a=Array.from({length:e.length},(e,t)=>({start:t,end:t+1}));for(;a.length>1;){let r=null;for(let s=0;s<a.length-1;s++){let n=e.slice(a[s].start,a[s+1].end),l=t.get(n.join(","));null!=l&&(null==r||l<r[0])&&(r=[l,s])}if(null!=r){let e=r[1];a[e]={start:a[e].start,end:a[e+1].end},a.splice(e+1,1)}else break}return a})(e,t).map(a=>t.get(e.slice(a.start,a.end).join(","))).filter(e=>null!=e)}(e,this.rankMap))}if(null==t)break;let c=this.specialTokens[t[0]];n.push(c),i=t.index+t[0].length}return n}decode(e){let t=[],a=0;for(let r=0;r<e.length;++r){let s=e[r],n=this.textMap.get(s)??this.inverseSpecialTokens[s];null!=n&&(t.push(n),a+=n.length)}let r=new Uint8Array(a),s=0;for(let e of t)r.set(e,s),s+=e.length;return this.textDecoder.decode(r)}},d=c;r="symbol"!=typeof(n="specialTokenRegex")?n+"":n,s=e=>RegExp(e.map(e=>e.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&")).join("|"),"g"),r in d?o(d,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[r]=s}},function(e){e.O(0,[222,478,754,744],function(){return e(e.s=1520)}),_N_E=e.O()}]);