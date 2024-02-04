import styled from '@emotion/styled';
import Image from '../../assets/ImgRentalCar.webp';
import { Link } from 'react-router-dom';
 const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Image});
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 600px;
  overflow: hidden !important;
`;

const Title = styled.h1`
  margin-top: 50px;
  color:#fff;
`
const Item = styled.p`
font-size: 30px;
`

const Btn = styled(Link)`
  display: flex;
  width: 140px;
  height: 2px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #734d26;
  color: #fff;
  margin-top: 50px;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #4d0f00;}
`
export {HomeWrapper, Title, Item, Btn};