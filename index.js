import{a as w,S as P,i as a}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();let n=1,f=15;function S(){n+=1}function q(){n=1}async function g(t){const o="46773204-8ec36d0a78d9132ebe706b3ce",i=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:f});return(await w.get(`https://pixabay.com/api/?${i}`)).data}document.querySelector("body");let h=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,loop:!0});const R=document.querySelector(".form"),$=document.querySelector(".user-input"),l=document.querySelector(".btn-load");function I(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}d();let c;R.addEventListener("submit",async t=>{if(t.preventDefault(),c=$.value.trim(),c){q(),L(),l.removeEventListener("click",m);try{const o=await g(c);v(o,h)?o.totalHits>15&&(I(),l.addEventListener("click",m)):(a.error({message:"No images found. Try a different query!",position:"topRight"}),d())}catch{a.error({message:"An error occurred while fetching images. Please try again.",position:"topRight"})}finally{b()}}});async function m(){S(),L();try{const t=await g(c);t.hits.length===0?(a.warning({message:"No more images to load.",position:"topRight"}),d()):(v(t,h),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}))}catch{a.error({message:"Failed to load more images. Please try again.",position:"topRight"})}finally{b()}}const y=document.querySelector(".wrapp"),u=document.querySelector(".gallery");function v(t,o){if(t.total===0){u.innerHTML="";return}else{const i=Math.ceil(t.totalHits/f);n>=i&&(d(),a.error({message:"You've reached the end of search results.",position:"topRight"}));const r=t.hits.map(e=>`
          <li class="gallery-item">
            <a href="${e.largeImageURL}" data-source="${e.largeImageURL}">
              <img src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="wrapp-items">
              <div class="info-item"><p class="bold">Likes</p><p>${e.likes}</p></div>
              <div class="info-item"><p class="bold">Views</p><p>${e.views}</p></div>
              <div class="info-item"><p class="bold">Comments</p><p>${e.comments}</p></div>
              <div class="info-item"><p class="bold">Downloads</p><p>${e.downloads}</p></div>
            </div>
          </li>`).join("");return u.innerHTML=n===1?r:u.innerHTML+r,o.refresh(),!0}}function L(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}
//# sourceMappingURL=index.js.map
