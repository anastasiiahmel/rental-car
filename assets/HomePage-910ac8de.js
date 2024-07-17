import{n as t,L as n,r,j as e}from"./index-911a2b2d.js";const s="/rental-car/assets/videoCars-300ebec9.mp4",i=t.video`
  width: 100%;
  height: 100%;
  position: relative;
`,c=t.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,a=t.h1`
  font-size: 40px;
  color: #80bfff;
`,x=t.p`
  font-size: 30px;
`,p=t(n)`
  display: flex;
  width: 180px;
  height: 5px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #b0c4de;
  }
`,d=()=>{const o=r.useRef(null);return r.useEffect(()=>{o.current&&o.current.play()},[]),e.jsxs(e.Fragment,{children:[e.jsx(i,{ref:o,width:"100%",muted:!0,loop:!0,autoPlay:!0,children:e.jsx("source",{src:s,type:"video/mp4"})}),e.jsxs(c,{children:[e.jsx(a,{children:"Go to a free life!"}),e.jsx(x,{children:"And we will help you choose the right wheels "}),e.jsx(p,{to:"/catalog",children:"Order a car"})]})]})};function l(){return e.jsx(e.Fragment,{children:e.jsx(d,{})})}function u(){return e.jsx(l,{})}export{u as default};
