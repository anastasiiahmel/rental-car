import styled from '@emotion/styled';


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
width: 500px;
height: 650px;
border-radius: 5%;
position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
const ImgModal = styled.img`
display: block; 
  margin: 0 auto; 
 width: 461px; 
  height: 280px;
  border-radius: 5%;
`

const MakeModalYear = styled.p`
  font-size: 18px;
  margin-top: 14px;
  line-height: 18px;
  letter-spacing: 1,5;
`

const AddressData = styled.p`
  width: 277px;
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
margin: 0 auto; 
width: 461px;
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
export {ModalOverlay,ModalContent, CloseButton, ImgModal, MakeModalYear, AddressData, MachineDescription, InformCar, AccessoriesFunct, TitleInform}