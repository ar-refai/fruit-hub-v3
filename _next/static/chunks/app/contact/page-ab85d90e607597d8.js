(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2945:function(e,a,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,3951))},3951:function(e,a,t){"use strict";t.r(a);var r=t(3827),s=t(4090);a.default=()=>{let[e,a]=(0,s.useState)(""),[t,l]=(0,s.useState)(""),[d,o]=(0,s.useState)(""),[i,n]=(0,s.useState)({}),[m,c]=(0,s.useState)(!1),[x,u]=(0,s.useState)(""),b=()=>{let a={};return e||(a.name="Name is required"),t?/\S+@\S+\.\S+/.test(t)||(a.email="Email is invalid"):a.email="Email is required",d||(a.message="Message is required"),a},h=async r=>{r.preventDefault();let s=b();if(0===Object.keys(s).length){c(!0),n({}),u("");try{let r=await fetch("http://api.internationalfruithub.com/api/v1/submit-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,message:d})});if(r.ok)a(""),l(""),o(""),u("Your message has been sent successfully!");else{let e=await r.json();n({submit:e.message||"Something went wrong. Please try again."})}}catch(e){n({submit:"Something went wrong. Please try again."})}finally{c(!1)}}else n(s)};return(0,r.jsx)("section",{id:"contact",className:"overflow-hidden relative py-16 md:py-20 lg:py-28 ",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"-mx-4 flex flex-wrap ",children:(0,r.jsx)("div",{className:"w-full px-4 ",children:(0,r.jsxs)("div",{className:"mb-12 rounded-2xl shadow-2xl hover:shadow-sm transform hover:translate-y-2 transition-all ease duration-300 bg-white px-8 py-11 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]","data-wow-delay":".15s",children:[(0,r.jsx)("h2",{className:"mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl",children:"Need Help? Contact Us"}),(0,r.jsx)("p",{className:"mb-12 text-base font-medium text-body-color",children:"Our support team will get back to you ASAP via email."}),x&&(0,r.jsx)("p",{className:"text-green-500 text-sm mb-4",children:x}),(0,r.jsx)("form",{onSubmit:h,children:(0,r.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,r.jsx)("div",{className:"w-full px-4 md:w-1/2",children:(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("label",{htmlFor:"name",className:"mb-3 block text-sm font-medium text-dark dark:text-white",children:"Your Name"}),(0,r.jsx)("input",{type:"text",name:"name",value:e,onChange:e=>a(e.target.value),placeholder:"Enter your name",className:"border-stroke w-full rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"}),i.name&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:i.name})]})}),(0,r.jsx)("div",{className:"w-full px-4 md:w-1/2",children:(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("label",{htmlFor:"email",className:"mb-3 block text-sm font-medium text-dark dark:text-white",children:"Your Email"}),(0,r.jsx)("input",{type:"email",name:"email",value:t,onChange:e=>l(e.target.value),placeholder:"Enter your email",className:"border-stroke w-full rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"}),i.email&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:i.email})]})}),(0,r.jsx)("div",{className:"w-full px-4",children:(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("label",{htmlFor:"message",className:"mb-3 block text-sm font-medium text-dark dark:text-white",children:"Your Message"}),(0,r.jsx)("textarea",{name:"message",rows:5,value:d,onChange:e=>o(e.target.value),placeholder:"Enter your Message",className:"border-stroke w-full resize-none rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"}),i.message&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:i.message})]})}),i.submit&&(0,r.jsx)("div",{className:"w-full px-4",children:(0,r.jsx)("p",{className:"text-red-500 text-sm mb-4",children:i.submit})}),(0,r.jsx)("div",{className:"w-full px-4",children:(0,r.jsx)("button",{type:"submit",disabled:m,className:"bg-primary hover:bg-white hover:text-primary font-bold border-2 border-primary rounded px-9 py-4 text-base text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark",children:m?"Submitting...":"Submit Your Message"})})]})})]})})})})})}}},function(e){e.O(0,[250,971,69,744],function(){return e(e.s=2945)}),_N_E=e.O()}]);