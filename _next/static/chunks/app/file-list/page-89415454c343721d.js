(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{3130:function(e,t,a){Promise.resolve().then(a.bind(a,6956))},6956:function(e,t,a){"use strict";a.r(t);var i=a(757),r=a(6374),n=a.n(r),s=a(7726),l=a(9563),c=a.n(l),d=a(940),o=a(9725),u=a(9041),h=a.n(u);let formatBytes=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";if(1===e)return"1 Byte";let a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]};t.default=()=>{let[e,t]=(0,s.useState)(),[a,r]=(0,s.useState)();(0,s.useEffect)(()=>{let fetchData=async()=>{let e=(0,d.Pi)();if(null===e){r("API key is null");return}try{let a=await (0,d.uB)(e);t(a)}catch(e){e instanceof Error?r(e.message):r("An unknown error occurred")}};fetchData()},[]);let handleQuickStart=async e=>{let t=(0,d.Pi)();if(null===t){r("API key is null");return}await fetch("https://api.openai.com/v1/fine_tuning/jobs",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({training_file:e,model:"gpt-3.5-turbo"})})};return a?(0,i.jsxs)("div",{children:["Error: ",a]}):e?(0,i.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-900 min-h-screen p-8",children:[(0,i.jsx)("h1",{className:"text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200",children:"FileList"}),(0,i.jsx)("div",{className:"overflow-x-auto shadow-md rounded-lg",children:(0,i.jsxs)("table",{className:"min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-300",children:[(0,i.jsx)("thead",{className:"bg-gray-900 dark:bg-gray-700 text-white",children:(0,i.jsxs)("tr",{children:[["Name","ID","size","Date Created"].map((e,t)=>(0,i.jsx)("th",{className:"sticky top-0 py-3 px-6 text-left font-medium",children:e},t)),(0,i.jsx)("th",{className:"sticky top-0 py-3 px-6 text-left font-medium flex justify-center",children:"Quick Start"})]})}),(0,i.jsx)("tbody",{children:e&&e.data.filter(e=>"fine-tune"===e.purpose).map((e,t)=>(0,i.jsxs)("tr",{className:"text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200",children:[(0,i.jsx)("td",{children:(0,i.jsx)(c(),{href:{pathname:"/editor",query:{id:e.id,name:e.filename}},children:(0,i.jsx)("div",{className:"py-3 px-6",children:e.filename})})}),(0,i.jsx)("td",{children:(0,i.jsx)(c(),{href:{pathname:"/editor",query:{id:e.id,name:e.filename}},children:(0,i.jsx)("div",{className:"py-3 px-6",children:e.id})})}),(0,i.jsx)("td",{children:(0,i.jsx)(c(),{href:{pathname:"/editor",query:{id:e.id,name:e.filename}},children:(0,i.jsx)("div",{className:"py-3 px-6",children:formatBytes(e.bytes)})})}),(0,i.jsx)("td",{children:(0,i.jsx)(c(),{href:{pathname:"/editor",query:{id:e.id,name:e.filename}},children:(0,i.jsx)("div",{className:"py-3 px-6",children:new Date(1e3*e.created_at).toLocaleString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})})})}),(0,i.jsx)("td",{children:(0,i.jsx)(c(),{href:{pathname:"/editor",query:{id:e.id,name:e.filename}},children:(0,i.jsx)("div",{className:"py-3 flex items-center justify-center",children:(0,i.jsx)("button",{onClick:t=>{t.preventDefault(),handleQuickStart(e.id)},className:"flex items-center justify-center bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 rounded-lg focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150",children:(0,i.jsx)("span",{className:"".concat(n().className," ").concat(h().icon," text-3xl"),children:"play_arrow"})})})})})]},t))})]})})]}):(0,i.jsx)(o.Z,{})}},9725:function(e,t,a){"use strict";var i=a(757);t.Z=()=>(0,i.jsxs)("div",{className:"flex justify-center items-center min-h-screen space-x-4 dark:bg-gray-800",children:[(0,i.jsx)("div",{className:"animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 dark:border-white"}),(0,i.jsx)("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Loading..."})]})},940:function(e,t,a){"use strict";a.d(t,{Pi:function(){return getApiKey},ks:function(){return saveApiKey},uB:function(){return fetchFiles}});let saveApiKey=e=>{sessionStorage.setItem("apiKey",e)},getApiKey=()=>sessionStorage.getItem("apiKey"),fetchFiles=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},9041:function(e){e.exports={fill:"styles_fill__fOvY0"}},6374:function(e){e.exports={style:{fontFamily:"'__materialSymbols_95097f', '__materialSymbols_Fallback_95097f'",fontStyle:"normal"},className:"__className_95097f",variable:"__variable_95097f"}}},function(e){e.O(0,[793,297,62,744],function(){return e(e.s=3130)}),_N_E=e.O()}]);