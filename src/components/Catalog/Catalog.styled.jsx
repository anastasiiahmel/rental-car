import styled from '@emotion/styled';
import { Button } from 'antd';

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
/* margin-top: 50px; */
`

const RentalPrice = styled.span`
  /* text-align: right; */
`

const ModelCar = styled.span`
  color: #3470FF;
`

const InformPAragraph = styled.p`
width: 270px;
font-size: 12px;
color: rgba(18, 20, 23, 0.5);

`
const MakeModalYear = styled.p`
  font-size: 16px;
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
export {Container, ImgCatalog, ContainerInform, RentalPrice,ModelCar,InformPAragraph,BtnLearnMore, MakeModalYear, BlockInform};