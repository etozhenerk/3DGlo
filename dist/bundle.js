(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const n=function(){function n(t){var o,r=t.selector,a=t.pattern,i=void 0===a?{}:a,c=t.method;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.form=document.querySelector(r),this.pattern=i,this.method=c,this.elementsForm=(o=this.form.elements,function(t){if(Array.isArray(t))return e(t)}(o)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})),this.error=new Set}var o,r;return o=n,(r=[{key:"init",value:function(){var e=this;this.applyStyle(),this.setPattern(),this.elementsForm.forEach((function(t){return t.addEventListener("change",e.checkIt.bind(e))})),this.form.addEventListener("submit",(function(t){if(t.preventDefault(),e.form.lastElementChild.classList.contains("statusMessage")&&e.form.lastChild.remove(),e.elementsForm.forEach((function(t){return e.checkIt({target:t})})),!e.error.size){e.sendForm("Загрузка...");var n=new FormData(e.form),o={};n.forEach((function(e,t){o[t]=e})),e.postData(o).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.sendForm("Спасибо! Мы скоро с вами свяжемся!")})).catch((function(t){e.sendForm("Что-то пошло не так..."),console.error(t)})),e.elementsForm.forEach((function(e){e.value=""}))}}))}},{key:"postData",value:function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"sendForm",value:function(e){if(this.form.lastElementChild.classList.contains("statusMessage"))this.form.lastChild.textContent=e;else{var t=document.createElement("div");t.classList.add("statusMessage"),t.style.cssText="\n      font-size: 2rem;\n      color:green",this.form.appendChild(t),t.textContent=e}}},{key:"isValid",value:function(e){var t=this,n={notEmpty:function(e){return""!==e.value},pattern:function(e,t){return t.test(e.value)}};if(this.method){var o=this.method[e.id];if(o)return o.every((function(o){return n[o[0]](e,t.pattern[o[1]])}));console.warn("Необъодимо передать id полей ввода и методы проверки этих полей")}return!0}},{key:"checkIt",value:function(e){var t=e.target;this.isValid(t)?(this.showSeccess(t),this.error.delete(t)):(this.showEror(t),this.error.add(t))}},{key:"showEror",value:function(e){if(e.classList.remove("seccess"),e.classList.add("error"),!e.nextElementSibling||!e.nextElementSibling.classList.contains("validator-error")){var t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}}},{key:"showSeccess",value:function(e){e.classList.remove("error"),e.classList.add("seccess"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}},{key:"applyStyle",value:function(){var e=document.createElement("style");e.textContent="\n    input.seccess {\n      border: 2px solid green !important;\n    }\n    input.error {\n      border: 2px solid red !important;\n    }\n    .validator-error {\n      font-size: 12px ;\n      font-family: sans-serif;\n      color: red;\n    }\n    ",document.head.appendChild(e)}},{key:"setPattern",value:function(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/)}}])&&t(o.prototype,r),n}();var o,r,a,i,c,s,l,u,m,d,f,v,h;d="31 december 2020 18:10",f=document.querySelector("#timer-hours"),v=document.querySelector("#timer-minutes"),h=document.querySelector("#timer-seconds"),function e(){var t,n,o,r=(t=(new Date(d).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),{timeRemaning:t,hours:Math.floor(t/60/60),minutes:o,seconds:n});f.textContent=r.hours<10?"0"+r.hours:r.hours,v.textContent=r.minutes<10?"0"+r.minutes:r.minutes,h.textContent=r.seconds<10?"0"+r.seconds:r.seconds,r.timeRemaning<=0?(f.textContent="00",v.textContent="00",h.textContent="00"):setTimeout(e,1e3)}(),l=document.querySelector("menu"),u=document.querySelector("body"),m=function(){l.classList.toggle("active-menu")},u.addEventListener("click",(function(e){var t=e.target;if(t=t.closest(".menu"))m();else if(!(t=e.target).classList.contains("close-btn")&&t.closest("menu")||!l.classList.contains("active-menu")){if(t=t.closest("menu li")){m(),e.preventDefault();var n=t.firstChild.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}}else m()})),function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=.1;e.style.opacity=n;var o=function(){if(document.documentElement.clientWidth>768)var t=setInterval((function(){n<=.1&&(clearInterval(t),e.style.display="none"),e.style.opacity=n,n-=.1*n}),10);else n=.1,e.style.opacity=n,e.style.display="none"};t.forEach((function(t){t.addEventListener("click",(function(){!function(){if(e.style.display="block",document.documentElement.clientWidth>768)var t=setInterval((function(){n>=1&&clearInterval(t),e.style.opacity=n,n+=.1*n}),10);else n=1,e.style.opacity=n}()}))})),e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?o():(t=t.closest(".popup-content"))||o()}))}(),(s=document.querySelector('a[href="#service-block')).addEventListener("click",(function(e){e.preventDefault();var t=s.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})),a=document.querySelector(".service-header"),i=a.querySelectorAll(".service-header-tab"),c=document.querySelectorAll(".service-tab"),a.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&i.forEach((function(e,n){e===t&&function(e){for(var t=0;t<c.length;t++)e===t?(i[t].classList.add("active"),c[t].classList.remove("d-none")):(i[t].classList.remove("active"),c[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots"),n=document.querySelector(".portfolio-content"),o=0;o<e.length;o++){var r=document.createElement("li");r.classList.add("dot"),t.append(r)}var a,i=document.querySelectorAll(".dot"),c=0,s=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},u=function(){s(e,c,"portfolio-item-active"),s(i,c,"dot-active"),++c>=e.length&&(c=0),l(e,c,"portfolio-item-active"),l(i,c,"dot-active")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;a=setInterval(u,e)};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(s(e,c,"portfolio-item-active"),s(i,c,"dot-active"),n.matches("#arrow-right")?c++:n.matches("#arrow-left")?c--:n.matches(".dot")&&i.forEach((function(e,t){e===n&&(c=t)})),c>=e.length&&(c=0),c<0&&(c=e.length-1),l(e,c,"portfolio-item-active"),l(i,c,"dot-active"))})),n.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(a)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&m()})),m()}(),o=document.querySelector(".command"),r={},o.addEventListener("mouseover",(function(e){var t=e.target;t.matches(".command__photo")&&(r[t.dataset.img]=t.src,t.src=t.dataset.img)})),o.addEventListener("mouseout",(function(e){var t=e.target;t.matches(".command__photo")&&(t.src=r[t.dataset.img])})),document.querySelector(".calc-block").addEventListener("input",(function(e){var t=e.target;t.matches("input.calc-item")&&(t.value=t.value.replace(/\D/,""))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),i=document.getElementById("total"),c=function(){var t=0,c=1,s=1,l=0,u=10,m=n.options[n.selectedIndex].value,d=+o.value;if(a.value>1&&(c+=(a.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),m&&d){(t=e*m*d*c*s)>1e4&&(u=100);var f=Math.round(10/u/t),v=setInterval((function(){(l+=u)===t&&clearInterval(v),i.textContent=l}),f)}i.textContent=t};t.addEventListener("change",(function(e){var t=e.target;t!==n&&t!==o&&t!==r&&t!==a||c()}))}(100);var p=new n({selector:"#form1",pattern:{name:/^[\sа-я]+$/i},method:{"form1-phone":[["notEmpty"],["pattern","phone"]],"form1-email":[["notEmpty"],["pattern","email"]],"form1-name":[["notEmpty"],["pattern","name"]]}}),y=new n({selector:"#form2",pattern:{name:/^[\sа-я]+$/i,message:/^[\W]+$/i},method:{"form2-phone":[["notEmpty"],["pattern","phone"]],"form2-email":[["notEmpty"],["pattern","email"]],"form2-name":[["notEmpty"],["pattern","name"]],"form2-message":[["notEmpty"],["pattern","message"]]}}),g=new n({selector:"#form3",pattern:{name:/^[\sа-я]+$/i},method:{"form3-phone":[["notEmpty"],["pattern","phone"]],"form3-email":[["notEmpty"],["pattern","email"]],"form3-name":[["notEmpty"],["pattern","name"]]}});p.init(),y.init(),g.init()})();