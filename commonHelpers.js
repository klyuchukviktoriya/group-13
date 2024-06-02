import{a as i}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=i.create({baseURL:"https://dummyjson.com"});async function l(){return await a.get("/products")}const u=o=>o.map(({id:r,title:c,price:n,description:e,tags:t,images:s})=>`<li class="productCard" data-id="${r}">
    <img src="${s[0]}" alt="${t}" width="250">
    <h2>${c}</h2>
    <p>${n}</p>
    <p>${e}</p>
  </li>`).join(""),d=document.getElementById("allProducts");l().then(({data:{products:o}})=>{console.log(o);const r=u(o);d.insertAdjacentHTML("beforeend",r)});
//# sourceMappingURL=commonHelpers.js.map
