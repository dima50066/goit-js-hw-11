import{S as f,i as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const p="44238533-8b617bda18ddca61b92d6b256",m="https://pixabay.com/api/";async function y(e){const o=await fetch(`${m}?key=${p}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error("Network response was not ok");return await o.json()}function h(e){e.innerHTML=""}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250});g.refresh();function w(e){e.style.display="block"}function c(e){e.style.display="none"}function b(e,o){const s=e.map(r=>`
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}">
        <div>
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </a>
    `).join("");o.insertAdjacentHTML("beforeend",s)}function l(e){u.error({title:"Error",message:e})}function L(e){u.info({title:"Info",message:e})}const I=document.getElementById("search-form"),E=document.getElementById("search-input"),d=document.getElementById("gallery"),i=document.getElementById("loader");I.addEventListener("submit",async e=>{e.preventDefault();const o=E.value.trim();if(o===""){l("Search query cannot be empty!");return}h(d),w(i);try{const s=await y(o);c(i);const r=s.hits;if(r.length===0){L("Sorry, there are no images matching your search query. Please try again!");return}b(r,d)}catch(s){c(i),l("Something went wrong. Please try again later."),console.error(s)}});
//# sourceMappingURL=commonHelpers.js.map
