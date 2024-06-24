import styled from '@emotion/styled';
import { Alert, Button } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ContainerImg = styled.div`
  position: relative;
  width: 274px;
`;
const ContainerInform = styled.div`
  margin-left: 30px;
  margin-bottom: 50px;
`;

const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ImgCatalog = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 5%;
`;
const RentalPrice = styled.p`
  margin-top: 14px;
`;
const BlockPriceYear = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModelCar = styled.span`
  color: #3470ff;
`;

const InformPAragraph = styled.p`
  width: 270px;
  height: 40px;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 18px;
  letter-spacing: 1, 5;
`;
const MakeModalYear = styled.p`
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 8px;
`;

const BtnLearnMore = styled(Button)`
  width: 100%;
  height: 44px;
  margin-top: 28px;
`;

const BlockInform = styled.div`
  width: 274px;
`;
const NotFilters = styled(Alert)`
  width: 600px;
  height: 80px;
  display: flex;
  margin: 0 auto;
`;

const LinkLoadMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  text-decoration-line: underline;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #3470ff;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;

const BtnIcon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 15px;
`;
export {
  GeneralContainer,
  BtnIcon,
  NotFilters,
  BlockPriceYear,
  RentalPrice,
  ContainerImg,
  LinkLoadMore,
  Container,
  ImgCatalog,
  ContainerInform,
  ModelCar,
  InformPAragraph,
  BtnLearnMore,
  MakeModalYear,
  BlockInform,
};
