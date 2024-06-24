import{n as d,u,r as n,j as e}from"./index-a2ce3fa2.js";import{s as p,C as m,A as x,M as f}from"./CatalogItem-b06f16e8.js";const C=d.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,j=()=>{const t=u(p),[l,o]=n.useState(!1),[a,r]=n.useState(null),i=s=>{r(s),o(!0)},c=()=>{o(!1),r(null)};return e.jsxs(C,{children:[t.length>0?t.map(s=>e.jsx(m,{car:s,onLearnMore:i},s.id)):e.jsx(x,{message:"Sorry, no favorite cars!",description:"Add the model you are interested in so you don't lose it.",type:"info",showIcon:!0}),a&&e.jsx(f,{car:a,onClose:c,visible:l})]})},g=()=>e.jsx(j,{});export{g as default};
