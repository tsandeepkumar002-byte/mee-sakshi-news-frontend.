const API_BASE = "https://mee-sakshi-news-backend.onrender.com";
async function postJSON(p,d){const r=await fetch(API_BASE+p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});return r.json();}
async function postForm(p,f){const r=await fetch(API_BASE+p,{method:"POST",body:f});return r.json();}
async function getJSON(p){const r=await fetch(API_BASE+p);return r.json();}
