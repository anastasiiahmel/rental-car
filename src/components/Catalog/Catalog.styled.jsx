import styled from '@emotion/styled';
import { Button } from 'antd';
import Icon from '..//../assets/icon/iconHeart.svg'

 const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
   
`;

const ContainerInform = styled.div`
margin-left: 30px;
  margin-bottom: 50px;
`
const ImgCatalog = styled.img`
width: 274px;
height: 268px;
border-radius: 5%;

`

const RentalPrice = styled.span`

`

const ModelCar = styled.span`
  color: #3470FF;
`

const InformPAragraph = styled.p`
width: 270px;
height: 40px;
font-size: 12px;
color: rgba(18, 20, 23, 0.5);
line-height: 18px;
letter-spacing: 1,5;

`
const MakeModalYear = styled.p`
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
  `

const BtnLearnMore = styled(Button)`
  width: 100%;
  height: 44px;
  margin-top: 28px;
  /* margin-bottom: 50px; */

`

const BlockInform = styled.div`
width: 274px;
/* height: 426px; */

`
const StyledIconHeart = styled(Icon)`
  width: 32px;
  height: 22px;
  stroke: #000;
`;
export {Container, ImgCatalog, ContainerInform, RentalPrice,ModelCar,InformPAragraph,BtnLearnMore, MakeModalYear, BlockInform, StyledIconHeart};