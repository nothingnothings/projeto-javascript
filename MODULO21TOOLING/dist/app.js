(()=>{"use strict";var e,t,r={},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e](t,t.exports,o),t.exports}o.m=r,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".app.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="learn-webpack:",o.l=(r,n,i,s)=>{if(e[r])e[r].push(n);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var h=(t,n)=>{a.onerror=a.onload=null,clearTimeout(u);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var n,i,[s,a,c]=r,l=0,d=[];l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&d.push(e[i][0]),e[i]=0;for(n in a)o.o(a,n)&&(o.m[n]=a[n]);for(c&&c(o),t&&t(r);d.length;)d.shift()()},r=self.webpackChunklearn_webpack=self.webpackChunklearn_webpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();class i{static clearEventListeners(e){const t=e.cloneNode(!0);return e.replaceWith(t),t}static moveElement(e,t){const r=document.getElementById(e);document.querySelector(t).append(r),r.scrollIntoView({behavior:"smooth"})}}console.log("Project Item created");class s{constructor(e,t,r){hasActiveTooltip=!1,this.id=e,this.updateProjectListsHandler=t,this.connectMoreInfoButton(),this.connectSwitchButton(r),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const e=document.getElementById(this.id);console.log(e.dataset);const t=e.dataset.extraInfo;o.e(331).then(o.bind(o,331)).then((e=>{new e.Tooltip((()=>{this.hasActiveTooltip=!1}),t,this.id).attach(),this.hasActiveTooltip=!0}))}connectDrag(){const e=document.getElementById(this.id);e.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",this.id),e.dataTransfer.effectAllowed="move"})),e.addEventListener("dragend",(e=>{console.log(e)}))}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(e){let t=document.getElementById(this.id).querySelector("button:last-of-type");t=i.clearEventListeners(t),t.textContent="active"===e?"Finish":"Activate",t.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(e,t){this.updateProjectListsHandler=e,this.connectSwitchButton(t)}}class a{constructor(e){this.projects=[],this.type=e;const t=document.querySelectorAll(`#${e}-projects li`);for(const e of t)this.projects.push(new s(e.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}setSwitchHandlerFunction(e){this.switchHandler=e}connectDroppable(){const e=document.querySelector(`#${this.type}-projects ul`);e.addEventListener("dragenter",(t=>{"text/plain"===t.dataTransfer.types[0]&&(e.parentElement.classList.add("droppable"),t.preventDefault())})),e.addEventListener("dragover",(e=>{"text/plain"===e.dataTransfer.types[0]&&e.preventDefault()})),e.addEventListener("dragleave",(t=>{t.relatedTarget.closest(`#${this.type}-projects ul`)!==e&&e.parentElement.classList.remove("droppable")})),e.addEventListener("drop",(t=>{const r=t.dataTransfer.getData("text/plain");this.projects.find((e=>e.id===r))?e.parentElement.classList.remove("droppable"):(document.getElementById(r).querySelector("button:last-of-type").click(),e.parentElement.classList.remove("droppable"),t.preventDefault())}))}addProject(e){this.projects.push(e),i.moveElement(e.id,`#${this.type}-projects ul`),e.update(this.switchProject.bind(this),this.type)}switchProject(e){this.switchHandler(this.projects.find((t=>t.id===e))),this.projects=this.projects.filter((t=>t.id!==e))}}console.log(DEFAULT_VALUE),globalThis.DEFAULT_VALUE="MAX",class{static init(){const e=new a("active"),t=new a("finished");e.setSwitchHandlerFunction(t.addProject.bind(t)),t.setSwitchHandlerFunction(e.addProject.bind(e))}}.init()})();