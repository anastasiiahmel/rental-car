import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

 const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  position: relative;
 `;

const ContainerVideoInform = styled.div`
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
`;
const Title = styled.h1`
  margin-top: - 40px;
  font-size: 40px;
  color:#fff;

`;

const Item = styled.p`
font-size: 30px;
`;

const Btn = styled(Link)`
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
`

 export {BgVideo, ContainerVideoInform,Btn,Item, Title} ;