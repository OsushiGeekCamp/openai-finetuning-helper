(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{3417:function(e,a,t){Promise.resolve().then(t.bind(t,4620))},4620:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var r=t(3088),s=t(3532),l=t(2475),n=t(3809),o=t(4417);let i=e=>navigator.clipboard.writeText(e),c="system",d=(e,a,t)=>{let r=[...e];return r[a]=t,r},m=(e,a)=>{let t=[...e];return t.splice(a,1),t},u=(e,a)=>{let t;switch(a.type){case"SET_EXAMPLES":return a.examples;case"ADD_DEFAULT_EXAMPLE":return[...e,{messages:[{role:c,content:""}]}];case"ADD_EXAMPLE":return[...e,a.example];case"UPDATE_MESSAGE":return t=e[a.exampleIndex].messages,d(e,a.exampleIndex,{...e[a.exampleIndex],messages:d(t,a.messageIndex,a.message)});case"ADD_MESSAGE_TO_EXAMPLE":return t=e[a.exampleIndex].messages,d(e,a.exampleIndex,{...e[a.exampleIndex],messages:[...t,{role:c,content:""}]});case"REMOVE_MESSAGE_FROM_EXAMPLE":return t=e[a.exampleIndex].messages,d(e,a.exampleIndex,{...e[a.exampleIndex],messages:m(t,a.messageIndex)});case"REMOVE_EXAMPLE":return m(e,a.exampleIndex);default:throw Error("Unknown action type.")}};var x=t(4773),g=e=>{let{onClick:a,disabled:t=!1,children:s,className:l="",ariaLabel:n}=e;return(0,r.jsx)("button",{onClick:a,disabled:t,className:"p-2 whitespace-nowrap rounded ".concat(l),...n?{"aria-label":n}:{},children:s})};let p="p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700";var h=e=>{let{role:a,content:t,rows:s,contentPlaceholder:l,ariaLabel:n,onRoleChange:o,removeExample:i}=e,c=e=>{["system","user","assistant"].includes(e)&&o({role:e,content:t})},d=e=>{o({role:a,content:e})};return(0,r.jsxs)("div",{className:"flex flex-col m-1",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[(0,r.jsxs)("select",{value:a,onChange:e=>c(e.target.value),className:p,"aria-label":"Choose Role",children:[(0,r.jsx)("option",{value:"system",children:"System"}),(0,r.jsx)("option",{value:"user",children:"User"}),(0,r.jsx)("option",{value:"assistant",children:"Assistant"})]}),i&&(0,r.jsx)("button",{onClick:i,className:"px-2 ml-2 bg-red-500 text-white rounded dark:bg-red-700 hover:bg-red-600 active:bg-red-700","aria-label":"Remove This Example",children:"Remove"})]}),(0,r.jsx)("textarea",{placeholder:l,value:t,onChange:e=>d(e.target.value),className:p,...n?{"aria-label":n}:{},rows:s})]})},b=e=>{let{messages:a,updateMessageInExample:t,addMessageToExample:s,removeMessageFromExample:l,removeExample:n,exampleIndex:o}=e;return(0,r.jsxs)("div",{className:"flex space-x-4 mb-1",children:[a.map((e,a)=>(0,r.jsx)(h,{role:e.role,content:e.content,rows:4,contentPlaceholder:"Message Content",onRoleChange:e=>t(o,a,e),removeExample:()=>l(o,a),ariaLabel:"Message ".concat(a+1," in Example ").concat(o+1)},a)),(0,r.jsxs)("div",{className:"flex flex-col my-1",children:[(0,r.jsxs)(g,{onClick:()=>s(o),className:"h-1/2 bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 active:bg-blue-700 mb-2",ariaLabel:"Add New Message to [".concat(o+1,"] Example"),children:["Add New",(0,r.jsx)("br",{}),"Message"]}),(0,r.jsxs)(g,{onClick:()=>n(o),className:"h-1/2 bg-red-500 text-white dark:bg-red-700 hover:bg-red-600 active:bg-red-700",ariaLabel:"Remove [".concat(o+1,"] Example"),children:["Remove This",(0,r.jsx)("br",{}),"Example"]})]})]})},f=e=>{let{examples:a,updateMessageInExample:t,addMessageToExample:s,removeMessageFromExample:l,removeExample:n}=e;return(0,r.jsx)("div",{children:a.map((e,a)=>(0,r.jsx)("div",{className:"mb-4 overflow-x-auto",children:(0,r.jsx)(b,{messages:e.messages,updateMessageInExample:t,addMessageToExample:s,removeMessageFromExample:l,exampleIndex:a,removeExample:n})},a))})};let v=e=>{e.preventDefault()},E=e=>e?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600 dark:active:bg-orange-700",y=e=>"bg-gray-200 dark:bg-gray-700 p-2 ml-4 rounded-lg flex-shrink-0 ".concat(e<10?"text-red-500":"");var w=e=>{let{fileName:a,onFileNameChange:t,handleUpload:s,isUploadDisabled:l,copyToClipboardAsJsonl:n,examplesLength:o}=e;return(0,r.jsxs)("header",{className:"container mx-auto sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 flex justify-between items-center whitespace-nowrap overflow-x-auto",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("form",{onSubmit:v,children:[(0,r.jsx)("label",{className:"sr-only",htmlFor:"filenameInput",children:"File Name"}),(0,r.jsx)("input",{id:"filenameInput",type:"text",value:a,onChange:t,className:"p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md m-1 bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700",placeholder:"File Name"}),(0,r.jsx)(g,{onClick:s,className:E(l),disabled:l,children:"Upload"})]}),(0,r.jsx)(g,{onClick:n,className:"ml-4 bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:active:bg-yellow-700",children:"Copy to Clipboard"})]}),(0,r.jsx)("div",{title:o<10?"A minimum of 10 examples is required.":"",className:y(o),children:(0,r.jsxs)("span",{className:"text-xl font-medium",children:[o," example",1!==o?"s":""]})})]})},j=e=>{let{handleFileDrop:a,handleDragOver:t,fileName:s,handleFileNameChange:l,handleUpload:n,isUploadDisabled:o,copyToClipboardAsJsonl:i,examples:c,updateMessageInExample:d,addMessageToExample:m,removeMessageFromExample:u,removeExample:p,addNewExample:b,showFirstMessage:v,setShowFirstMessage:E,defaultFirstRole:y,setDefaultFirstRole:j,defaultFirstMessage:N,setDefaultFirstMessage:k}=e;return(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 min-h-screen",onDrop:a,onDragOver:t,children:[(0,r.jsx)(w,{fileName:s,onFileNameChange:l,handleUpload:n,isUploadDisabled:o,copyToClipboardAsJsonl:i,examplesLength:c.length}),(0,r.jsxs)("main",{className:"container mx-auto pt-0 pr-4 pb-4 pl-4",children:[(0,r.jsx)("div",{className:"ml-1",children:(0,r.jsx)(x.Z,{checked:v,onChange:E,label:"Set default first message"})}),v&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(h,{role:y,content:N,rows:2,contentPlaceholder:"First Message Content",onRoleChange:e=>{j(e.role),k(e.content)},ariaLabel:"First Message Content"})}),(0,r.jsx)(f,{examples:c,updateMessageInExample:d,addMessageToExample:m,removeMessageFromExample:u,removeExample:p}),(0,r.jsx)(g,{onClick:b,className:"bg-green-500 ml-1 text-white dark:bg-green-700 hover:bg-green-600 active:bg-green-700",ariaLabel:"Add New Example",children:"Add New Example"})]})]})};let N=e=>{let a=[{messages:[{role:c,content:""}]}];if(!e)return a;try{return e.split("\n").map(e=>JSON.parse(e))}catch(e){return a}},k=e=>{e.preventDefault()};var _=e=>{let{fileName:a,dataset:t}=e,[l,o]=(0,s.useState)(a),[d,m]=(0,s.useReducer)(u,N(t)),[x,g]=(0,s.useState)(!0),[p,h]=(0,s.useState)(c),[b,f]=(0,s.useState)(""),[v,E]=(0,s.useState)(null),[y,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{var e,a;E(null!==(a=null===(e=(0,n.Pi)())||void 0===e?void 0:e.trim())&&void 0!==a?a:null)},[]),(0,s.useEffect)(()=>{w(!v||0===l.length||0===d.length)},[v,l,d]);let _=()=>d.map(e=>JSON.stringify(e)).join("\n"),M=async e=>{e.preventDefault();let a=e.dataTransfer.files;if(0===a.length||!window.confirm("Are you sure you want to overwrite the content with this file?"))return;let t=a[0],r=new FileReader;r.onload=e=>{var a;let t=null===(a=e.target)||void 0===a?void 0:a.result,r=N(t);m({type:"SET_EXAMPLES",examples:r})},r.readAsText(t)};async function A(){let e=_(),a=new Blob([e],{type:"application/jsonl"}),t=new FormData;t.append("file",a,l),t.append("purpose","fine-tune");try{let e=await fetch("https://api.openai.com/v1/files",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(v)},body:t});if(!e.ok)throw Error("Failed to upload data: ".concat(e.statusText));let a=await e.json();console.log("Data uploaded successfully:",a)}catch(e){console.error("Error uploading data:",e)}}return(0,r.jsx)(j,{handleFileDrop:M,handleDragOver:k,fileName:l,handleFileNameChange:e=>{o(e.target.value.trim())},handleUpload:A,isUploadDisabled:y,copyToClipboardAsJsonl:()=>{i(_())},examples:d,updateMessageInExample:(e,a,t)=>{m({type:"UPDATE_MESSAGE",exampleIndex:e,messageIndex:a,message:t})},addMessageToExample:e=>{m({type:"ADD_MESSAGE_TO_EXAMPLE",exampleIndex:e})},removeMessageFromExample:(e,a)=>{m({type:"REMOVE_MESSAGE_FROM_EXAMPLE",exampleIndex:e,messageIndex:a})},removeExample:e=>{m({type:"REMOVE_EXAMPLE",exampleIndex:e})},addNewExample:()=>{x?m({type:"ADD_EXAMPLE",example:{messages:[{role:p,content:b}]}}):m({type:"ADD_DEFAULT_EXAMPLE"})},showFirstMessage:x,setShowFirstMessage:g,defaultFirstRole:p,setDefaultFirstRole:h,defaultFirstMessage:b,setDefaultFirstMessage:f})},M=()=>{var e;let a=(0,l.useSearchParams)(),t=a.get("id"),i=null!==(e=a.get("name"))&&void 0!==e?e:"",[c,d]=(0,s.useState)(!0),[m,u]=(0,s.useState)(),x=async()=>{if(!t){d(!1);return}let e={headers:{Authorization:"Bearer ".concat((0,n.Pi)())}};try{let a=await fetch("https://api.openai.com/v1/files/".concat(t,"/content"),e);if(!a.ok)throw Error("Failed to fetch data");let r=await a.text();u(r)}catch(e){console.error(e)}finally{d(!1)}};return((0,s.useEffect)(()=>{x()},[]),c)?(0,r.jsx)(o.Z,{}):(0,r.jsx)(_,{fileName:i,dataset:m})}},4417:function(e,a,t){"use strict";var r=t(3088);a.Z=()=>(0,r.jsxs)("div",{className:"flex justify-center items-center min-h-screen space-x-4 dark:bg-gray-800",children:[(0,r.jsx)("div",{className:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 dark:border-white"}),(0,r.jsx)("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Loading..."})]})},4773:function(e,a,t){"use strict";var r=t(3088);t(3532),a.Z=e=>{let{checked:a,onChange:t,label:s}=e;return(0,r.jsx)("div",{className:"mb-4 flex items-center",children:(0,r.jsxs)("label",{htmlFor:"toggle-switch",className:"flex items-center cursor-pointer",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:a,onChange:e=>t(e.target.checked),className:"sr-only","aria-labelledby":"toggle-label"}),(0,r.jsx)("div",{className:"block w-10 h-6 rounded-full ".concat(a?"bg-green-500":"bg-gray-400")}),(0,r.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ".concat(a?"transform translate-x-full":"")})]}),(0,r.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",children:s})]})})}},3809:function(e,a,t){"use strict";t.d(a,{Pi:function(){return s},ks:function(){return r},uB:function(){return l}});let r=e=>{sessionStorage.setItem("apiKey",e)},s=()=>sessionStorage.getItem("apiKey"),l=async e=>{let a=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!a.ok)throw Error("Network response was not ok"+a.statusText);return await a.json()}},4304:function(e,a,t){"use strict";var r=t(3532),s=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)l.call(a,r)&&!o.hasOwnProperty(r)&&(i[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:n.current}}a.jsx=i,a.jsxs=i},3088:function(e,a,t){"use strict";e.exports=t(4304)},2475:function(e,a,t){e.exports=t(401)}},function(e){e.O(0,[678,771,744],function(){return e(e.s=3417)}),_N_E=e.O()}]);