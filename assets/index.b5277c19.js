import{j as h,r as d,R as g,a as v}from"./vendor.032e01e6.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};x();const e=h.exports.jsx,c=h.exports.jsxs;function b(){const[a,n]=d.exports.useState("LOL is awesome"),[i,s]=d.exports.useState("https://www.garena.tw/"),t=encodeURIComponent(i),r=encodeURIComponent(a),o=`https://social-plugins.line.me/lineit/share?text=${r}&url=${t}`,u=`https://www.facebook.com/sharer/sharer.php?u=${t}&quote=${r}`,p=`https://wa.me/?text=${t} ${r}`,f=`http://twitter.com/share?text=${r}&url=${t}`;function m(){navigator.share?navigator.share({text:`${r} ${t}`}):alert("api not available")}return c("div",{className:"App",children:[c("div",{children:[e("input",{type:"text",value:a,onChange:l=>n(l.target.value)}),e("div",{children:"share text"}),e("div",{children:a}),e("input",{type:"text",value:i,onChange:l=>s(l.target.value)}),e("div",{children:"share url"}),e("div",{children:i})]}),c("ul",{children:[e("li",{children:e("a",{href:o,target:"_blank",children:e("button",{children:"line share"})})}),e("li",{children:e("a",{href:u,target:"_blank",children:e("button",{children:"FB share"})})}),e("li",{children:e("a",{href:p,target:"_blank",children:e("button",{children:"whatsapp share"})})}),e("li",{children:e("a",{href:f,target:"_blank",children:e("button",{children:"Twitter share"})})}),e("li",{children:e("button",{onClick:m,children:"nativeShare"})})]})]})}g.render(e(v.StrictMode,{children:e(b,{})}),document.getElementById("root"));
