import{a as u}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=u.create({baseURL:"https://dummyjson.com"});async function l(){return await d.get("/products")}async function i(r){return await d.get(`/products/${r}`)}const p=r=>r.map(({id:o,title:s,price:n,description:e,tags:t,images:c})=>`<li class="productCard" data-id="${o}">
    <img src="${c[0]}" alt="${t}" width="250">
    <h2>${s}</h2>
    <p>${n}</p>
    <p>${e}</p>
  </li>`).join(""),m=({id:r,title:o,price:s,description:n,tags:e,images:t})=>`<div class="productCard" data-id="${r}">
  <img src="${t[0]}" alt="${e}" width="250">
  <h2>${o}</h2>
  <p>${s}</p>
  <p>${n}</p>
</div>`,f=document.getElementById("allProducts"),a=document.getElementById("singleProductForm"),g=document.getElementById("singleProduct");l().then(({data:{products:r}})=>{console.log(r);const o=p(r);f.insertAdjacentHTML("beforeend",o)});a.addEventListener("submit",y);function y(r){r.preventDefault();const o=r.target.elements.id.value.trim();i(o).then(console.log),i(o).then(({data:s})=>{const n=m(s);g.innerHTML=n,a.reset()})}
//# sourceMappingURL=commonHelpers.js.map
