import{n as o,u as r,j as e}from"./index-d8f6b9a6.js";import{y as a,v as n,A as i}from"./CatalogItem-9f707e3a.js";const l=o.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,c=()=>{const t=r(a);return e.jsx(l,{children:t.length>0?t.map(s=>e.jsx(n,{car:s},s.id)):e.jsx(i,{message:"Sorry, no favorite cars !",description:"Add the model you are interested in so you don't lose it.",type:"info",showIcon:!0})})},m=()=>e.jsx(c,{});export{m as default};
