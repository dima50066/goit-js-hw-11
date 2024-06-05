import{S as u}from"./assets/vendor-5a07dfb1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="44238533-8b617bda18ddca61b92d6b256";async function p(t){const r=await fetch(`https://pixabay.com/api/?key=${f}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}function m(t){t.innerHTML=""}function y(t){t.style.display="block"}function c(t){t.style.display="none"}function h(t,r){const n=t.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}">
        <div>
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>
    `).join("");r.insertAdjacentHTML("beforeend",n),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l(t){iziToast.error({title:"Error",message:t})}function g(t){iziToast.info({title:"Info",message:t})}const w=document.getElementById("search-form"),b=document.getElementById("search-input"),d=document.getElementById("gallery"),i=document.getElementById("loader");w.addEventListener("submit",async t=>{t.preventDefault();const r=b.value.trim();if(r===""){l("Search query cannot be empty!");return}m(d),y(i);try{const n=await p(r);c(i);const s=n.hits;if(s.length===0){g("Sorry, there are no images matching your search query. Please try again!");return}h(s,d)}catch(n){c(i),l("Something went wrong. Please try again later."),console.error(n)}});
//# sourceMappingURL=commonHelpers.js.map
