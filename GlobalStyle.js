import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}


body {
  font-family: 'Manrope', sans-serif; 
  font-weight: 400;
  font-style: normal;
  height: 100%;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyle;
