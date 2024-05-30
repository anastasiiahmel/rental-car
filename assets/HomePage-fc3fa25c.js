import{n as t,L as o,j as e}from"./index-d8f6b9a6.js";const n="/rental-car/assets/video_bg-ded9b91b.mp4",r=t.video`
  width: 100%;
  height: 100%;
  position: relative;
 `,i=t.div`
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
  background-color: rgba(86, 134, 223, 0.466);
  width: 900px;
  height: 300px;
`,s=t.h1`
  margin-top: - 40px;
  font-size: 40px;
  color:#fff;

`,a=t.p`
font-size: 30px;
`,x=t(o)`
  display: flex;
  width: 180px;
  height: 5px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;;
  color: #fff;
  margin-top: 20px;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #B0C4DE;}
`;function p(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{muted:!0,loop:!0,src:n,autoPlay:!0}),e.jsxs(i,{children:[e.jsx(s,{children:"Go to a free life!"}),e.jsx(a,{children:"And we will help you choose the right wheels "}),e.jsx(x,{to:"/catalog",children:"Order a car"})]})]})}function c(){return e.jsx(e.Fragment,{children:e.jsx(p,{})})}function l(){return e.jsx(c,{})}export{l as default};
