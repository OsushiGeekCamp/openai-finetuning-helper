(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9826:function(e,t,r){Promise.resolve().then(r.bind(r,6068))},6068:function(e,t,r){"use strict";r.r(t);var n=r(9424),s=r(3381),o=r(3028);t.default=()=>{let[e,t]=(0,s.useState)("");(0,s.useEffect)(()=>{let e=(0,o.Pi)();e&&t(e)},[]);let handleSubmit=()=>{(0,o.ks)(e)};return(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md",children:[(0,n.jsx)("h2",{className:"mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100",children:"Enter Your OpenAI API Key"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),handleSubmit()},children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("input",{name:"api-key",type:"password",required:!0,className:"mt-1 p-2 w-full border dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300",value:e,onChange:e=>t(e.target.value)})}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("button",{type:"submit",className:"w-full p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:hover:bg-indigo-500",children:"Save API Key"})})]}),(0,n.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Your API key is stored locally and will not be sent to any external sources other than OpenAI."})]})}},3028:function(e,t,r){"use strict";r.d(t,{Pi:function(){return getApiKey},ks:function(){return saveApiKey},uB:function(){return fetchFiles}});let saveApiKey=e=>{sessionStorage.setItem("apiKey",e)},getApiKey=()=>sessionStorage.getItem("apiKey"),fetchFiles=async e=>{let t=await fetch("https://api.openai.com/v1/files",{headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Network response was not ok"+t.statusText);return await t.json()}},4990:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3381),s=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,u={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:c,props:u,_owner:a.current}}t.jsx=q,t.jsxs=q},9424:function(e,t,r){"use strict";e.exports=r(4990)}},function(e){e.O(0,[362,95,744],function(){return e(e.s=9826)}),_N_E=e.O()}]);