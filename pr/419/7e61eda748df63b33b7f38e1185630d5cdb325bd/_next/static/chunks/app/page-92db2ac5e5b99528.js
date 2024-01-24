(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2865:function(e,t,r){Promise.resolve().then(r.bind(r,8004))},8004:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(3288),s=r(2857),a=r(816),i=r(9164),o=r.n(i),u=e=>{let{inputValue:t,handleSubmit:r,handleInputChange:s}=e;return(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md",children:[(0,n.jsx)("h2",{className:"mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100",children:"Enter Your OpenAI API Key"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r()},children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("input",{name:"api-key",type:"password",required:!0,className:"mt-1 p-2 w-full border dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300",value:t,onChange:e=>s(e.target.value)})}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("button",{type:"submit",className:"w-full p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:hover:bg-indigo-500",children:"Save API Key"})})]}),(0,n.jsxs)("p",{className:"mb-2 text-sm text-gray-600 dark:text-gray-400 text-center",children:["You can access the"," ",(0,n.jsx)(o(),{href:"/editor",className:"text-indigo-500 hover:underline dark:text-indigo-400 dark:hover:underline",children:"Editor"})," ","page even without an API key."]}),(0,n.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Your API key is stored locally and will not be sent to any external sources other than OpenAI."})]})},d=r(6226),l=()=>{let e=(0,a.useRouter)(),[t,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{let e=(0,d.Pi)();e&&r(e)},[]),(0,n.jsx)(u,{inputValue:t,handleSubmit:()=>{(0,d.ks)(t),e.push("/file-list")},handleInputChange:e=>{r(e)}})}},6226:function(e,t,r){"use strict";r.d(t,{Pi:function(){return s},ks:function(){return n},uB:function(){return a}});let n=e=>{sessionStorage.setItem("apiKey",e)},s=()=>sessionStorage.getItem("apiKey"),a=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},816:function(e,t,r){e.exports=r(7314)}},function(e){e.O(0,[410,478,754,744],function(){return e(e.s=2865)}),_N_E=e.O()}]);