(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(t,e,o){},L1EO:function(t,e,o){},QfWi:function(t,e,o){"use strict";o.r(e);o("L1EO"),o("ranI"),o("Dv/5"),o("JBxO"),o("9UJh");function n(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function r(){for(var t=Math.floor(Math.random()*Math.pow(256,3)).toString(16);t.length<6;)t="0"+t;return"#"+t}var i,a={startButton:document.querySelector(".js-startButton"),veiwPort:document.querySelector(".window-game"),timer:document.querySelector(".timer"),modal:document.querySelector(".lightbox"),saveButton:document.querySelector(".js-modal__button"),points:document.querySelector(".js-points"),modalPointsField:document.querySelector(".modal-points"),modalInput:document.querySelector(".form-control"),recordsList:document.querySelector(".list"),newGamebutton:document.querySelector(".js-newGameButton")},u=!1,c=6e4,l=0,s="";function d(){u?a.startButton.setAttribute("disabled","true"):(c=6e4,u=!0,a.startButton.removeAttribute("disabled"),f(),m(c))}function m(t){i=setInterval((function(){t-=1e3,a.timer.textContent=t/1e3,0===t&&(clearInterval(i),v(),a.modal.classList.add("is-open"),a.modalPointsField.textContent=l)}),1e3)}function f(){for(var t=n(1,3),e=0;e<t;e+=1){var o=n(5,90),i=n(90,5),u=document.createElement("div"),c=n(10,30);u.setAttribute("style","width: "+c+"px; height: "+c+"px;\n     position: absolute; top: "+o+"%; left: "+i+"%; background-color: "+r()),a.veiwPort.appendChild(u)}}function v(){for(;a.veiwPort.firstChild;)a.veiwPort.firstChild.remove()}a.startButton.addEventListener("click",d),a.veiwPort.addEventListener("click",(function(t){if(t.target===t.currentTarget)return;var e=t.target;l+=1,a.points.textContent=l,e.remove(),f()})),a.saveButton.addEventListener("click",(function(t){s=a.modalInput.value,a.modal.classList.remove("is-open"),a.recordsList.insertAdjacentHTML("beforeend",'<li class="list-item">'+s+".........."+l+" points</li>"),t.preventDefault()})),a.newGamebutton.addEventListener("click",(function(){u&&(v(),clearInterval(i),a.points.textContent=0,a.timer.textContent="01:00",l=0,m(c=6e4),f(),console.log(i));d()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9f8276a58477cb7c9557.js.map