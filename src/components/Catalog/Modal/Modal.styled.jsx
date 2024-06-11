import styled from '@emotion/styled';
import { Button } from 'antd';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  `;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%; 
  overflow-y: auto; 
  font-family: 'Manrope', sans-serif;
  background: #fff;
  padding: 20px;
  border-radius: 24px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: 20px;
  background: none;
  border: none;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: color 0.5s ;
  &:hover,
  &:focus {
    color: rgba(52, 112, 255, 1);
  }
`;

const BtnRentalCar = styled(Button)`
  cursor: pointer;
  background-color: rgba(52, 112, 255, 1) !important;
  width: 168px;
  height: 44px;
  margin-top: 10px;
  font-size: 14px;
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1) !important;
  }
`
const RentalCarLink = styled.a`
  text-decoration: none;
`;


const ImgModal = styled.img`

  display: block; 
  margin: 0 auto; 
  width: 400px; 
  height: 250px;
  border-radius: 5%;
`

const MakeModalYear = styled.p`
  font-size: 16px;
  margin-top: 12px;
  line-height: 18px;
  letter-spacing: 1,5;
`

const AddressData = styled.p`
  width: 320px;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
  margin-bottom: 14px;
`

const MachineDescription = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 18px;
  letter-spacing: 1,5;
`

const InformCar = styled.div`
display: block; 

width: 450px;
margin-left: 50px;
line-height: 18px;
letter-spacing: 1,5;
`
const AccessoriesFunct = styled.p`
   font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
   margin-top: 8px;
  margin-bottom: 24px;
  line-height: 18px;
letter-spacing: 1,5;
`
const TitleInform = styled.p`
font-size: 14px;
margin-top: 24px;
  margin-bottom: 8px;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px; 

  li {
    font-size: 12px;
    margin-bottom: 10px;
     background-color: rgba(249, 249, 249, 1);
     border-radius: 35px;
    padding: 7px 14px;

  }
`;

export {BtnRentalCar, RentalCarLink, StyledList, ModalOverlay,ModalContent, CloseButton, ImgModal, MakeModalYear, AddressData, MachineDescription, InformCar, AccessoriesFunct, TitleInform}