if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"about.html",revision:"d2d95d67450c406f2c0aac0ef9aa8fd1"},{url:"app.js",revision:"6b5a74bd2863c2a04bb03e6b869c718c"},{url:"helpers.js",revision:"a8402ec0a5bb61271586c77e29c0473b"},{url:"icon.png",revision:"93944143dc8d7f9b3da5ffc7c7bc1e4d"},{url:"index.html",revision:"048a1b49ec54008928a7ff32a080e398"},{url:"manifest.webmanifest",revision:"f7150f9625233afca7cb6977a0cb012f"},{url:"style.css",revision:"0588670e11067d3e0e4af057e8ee80bb"}],{})}));
//# sourceMappingURL=sw.js.map
