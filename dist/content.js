(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var r,n;document.addEventListener("click",(function(e){var t=e.target.closest(".css-1rynq56");if(t&&t.className.includes("r-bcqeeo r-qvutc0")){var r,n={tagName:t.tagName,id:t.id,classNames:t.className,textContent:null===(r=t.textContent)||void 0===r?void 0:r.trim().substring(0,100),url:window.location.href,timestamp:(new Date).toISOString()};chrome.runtime.sendMessage({type:"onClick",clickData:n})}})),r=location.href,n=function(){var n,o,i,c=location.href;if(c!==r){r=c;var a=(n=document.title,o=document.querySelector("meta[name='description']"),i=document.querySelector("meta[name='keywords']"),{page_title:n,description:o?o.getAttribute("content"):null,keywords:i?i.getAttribute("content").split(" "):null});chrome.runtime.sendMessage(function(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){var n,i,c,a;n=r,i=t,c=o[t],a=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),(i="symbol"==e(a)?a:String(a))in n?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}({type:"urlChange",url:c},a))}},new MutationObserver((function(){n()})).observe(document.body,{subtree:!0,childList:!0}),window.addEventListener("popstate",n),window.addEventListener("hashchange",n)})();