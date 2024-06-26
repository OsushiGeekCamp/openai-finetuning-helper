(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{2743:function(e,t,a){Promise.resolve().then(a.bind(a,9367))},9367:function(e,t,a){"use strict";a.r(t);var s=a(6382),r=a(3379),n=a(6670),i=a(3608);let c={ID:"Job ID",CREATED_AT:"Job Created",FINE_TUNED_MODEL:"Fine Tuned Model",STATUS:"Status",TRAINING_FILE:"Training File ID",FILENAME:"File Name"},o=["ID","CREATED_AT","FINE_TUNED_MODEL","STATUS","TRAINING_FILE","FILENAME"],l=(e,t,a,s)=>"string"==typeof e[a]&&"string"==typeof t[a]?"asc"===s?e[a].localeCompare(t[a]):t[a].localeCompare(e[a]):"number"==typeof e[a]&&"number"==typeof t[a]?"asc"===s?e[a]-t[a]:t[a]-e[a]:0;t.default=()=>{let[e,t]=(0,r.useState)([]),[a,d]=(0,r.useState)([]),[u,f]=(0,r.useState)(!1),[h,p]=(0,r.useState)("CREATED_AT"),[m,g]=(0,r.useState)("desc"),y=e=>{p(e),g("asc"===m?"desc":"asc")};return(0,r.useEffect)(()=>{(async()=>{try{let e=(0,i.Pi)(),a=await fetch("https://api.openai.com/v1/fine_tuning/jobs",{headers:{Authorization:"Bearer ".concat(e)}}),s=(await a.json()).data.map(t=>fetch("https://api.openai.com/v1/fine_tuning/jobs/".concat(t.id),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.json())),r=await Promise.all(s),n=r.map(t=>fetch("https://api.openai.com/v1/files/".concat(t.training_file),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>e.json())),c=await Promise.all(n);r=r.map((e,t)=>({...e,filename:c[t].filename})),t(r)}catch(e){console.error("Failed to fetch jobs:",e)}})()},[]),(0,r.useEffect)(()=>{null!==h&&e&&t([...e].sort((e,t)=>l(e,t,h.toLowerCase().replace(/ /g,"_"),m)))},[h,m]),(0,r.useEffect)(()=>{d(e)},[e]),(0,r.useEffect)(()=>{u?d(e.filter(e=>"succeeded"===e.status)):d(e)},[u,e]),(0,s.jsx)("div",{className:"bg-white dark:bg-gray-900 min-h-screen",children:(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200",children:"Fine Tuning Jobs"}),(0,s.jsx)(n.Z,{checked:u,label:"Show only succeeded jobs",onChange:f}),(0,s.jsxs)("table",{className:"min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-300",children:[(0,s.jsx)("thead",{className:"bg-gray-900 dark:bg-gray-700 text-white",children:(0,s.jsx)("tr",{children:o.map((e,t)=>(0,s.jsx)("th",{className:"sticky top-0 py-3 px-6 text-left font-medium cursor-pointer transition duration-200 bg-gray-500 bg-opacity-50 hover:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-gray-800",onClick:()=>y(e),children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[c[e],h===e&&(0,s.jsx)("span",{children:"asc"===m?"▲":"▼"})]})},t))})}),(0,s.jsx)("tbody",{className:"text-gray-800 dark:text-gray-200",children:a.map(e=>(0,s.jsxs)("tr",{className:"border-t dark:border-gray-700",children:[(0,s.jsx)("td",{className:"py-2 px-4",children:e.id}),(0,s.jsx)("td",{className:"py-2 px-4",children:new Date(1e3*e.created_at).toLocaleString()}),(0,s.jsx)("td",{className:"py-2 px-4",children:e.fine_tuned_model}),(0,s.jsx)("td",{className:"py-2 px-4",children:e.status}),(0,s.jsx)("td",{className:"py-2 px-4",children:e.training_file}),(0,s.jsx)("td",{className:"py-2 px-4",children:e.filename})]},e.id))})]})]})})}},6670:function(e,t,a){"use strict";var s=a(6382);a(3379),t.Z=e=>{let{checked:t,onChange:a,label:r}=e;return(0,s.jsx)("div",{className:"mb-4 flex items-center",children:(0,s.jsxs)("label",{htmlFor:"toggle-switch",className:"flex items-center cursor-pointer",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{id:"toggle-switch",type:"checkbox",checked:t,onChange:e=>a(e.target.checked),className:"sr-only","aria-labelledby":"toggle-label"}),(0,s.jsx)("div",{className:"block w-10 h-6 rounded-full ".concat(t?"bg-green-500":"bg-gray-400")}),(0,s.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ".concat(t?"transform translate-x-full":"")})]}),(0,s.jsx)("span",{className:"ml-3 text-gray-700 dark:text-gray-300",children:r})]})})}},3608:function(e,t,a){"use strict";a.d(t,{Pi:function(){return r},ks:function(){return s},uB:function(){return n}});let s=e=>{sessionStorage.setItem("apiKey",e)},r=()=>sessionStorage.getItem("apiKey"),n=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},838:function(e,t,a){"use strict";var s=a(3379),r=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var s,o={},l=null,d=null;for(s in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:i.current}}t.jsx=o,t.jsxs=o},6382:function(e,t,a){"use strict";e.exports=a(838)}},function(e){e.O(0,[424,528,744],function(){return e(e.s=2743)}),_N_E=e.O()}]);