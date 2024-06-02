import{a as l}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const d=l.create({baseURL:"https://dummyjson.com"});async function p(){return await d.get("/products")}async function i(t){return await d.get(`/products/${t}`)}async function m(t){return await d.post("/products/add",t)}const f=t=>t.map(({id:o,title:c,price:n,description:e,tags:r,images:s})=>`<li class="productCard" data-id="${o}">
    <img src="${s[0]}" alt="${r}" width="250">
    <h2>${c}</h2>
    <p>${n}</p>
    <p>${e}</p>
  </li>`).join(""),g=({id:t,title:o,price:c,description:n,tags:e,images:r})=>`<div class="productCard" data-id="${t}">
  <img src="${r[0]}" alt="${e}" width="250">
  <h2>${o}</h2>
  <p>${c}</p>
  <p>${n}</p>
</div>`,y=({id:t,title:o,price:c,description:n})=>`<div class="productCard" data-id="${t}">
  
  <h2>${o}</h2>
  <p>${c}</p>
  <p>${n}</p>
</div>`,h=document.getElementById("allProducts"),u=document.getElementById("singleProductForm"),P=document.getElementById("singleProduct"),$=document.querySelector("#newProductSection"),a=document.querySelector("#newProductForm");p().then(({data:{products:t}})=>{console.log(t);const o=f(t);h.insertAdjacentHTML("beforeend",o)});u.addEventListener("submit",w);function w(t){t.preventDefault();const o=t.target.elements.id.value.trim();i(o).then(console.log),i(o).then(({data:c})=>{const n=g(c);P.innerHTML=n,u.reset()})}a.addEventListener("submit",v);function v(t){t.preventDefault();const o=t.target.elements.price.value.trim(),c=t.target.elements.description.value.trim(),n=t.target.elements.title.value.trim();m({price:o,description:c,title:n}).then(({data:r})=>{const s=y(r);$.innerHTML=s,a.reset()})}
//# sourceMappingURL=commonHelpers.js.map
