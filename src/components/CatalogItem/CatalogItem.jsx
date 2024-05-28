import  { useEffect, useState } from 'react';
import { HeartOutlined } from '@ant-design/icons';

import {
  BlockInform,
  BlockPriceYear,
  BtnIcon,
  BtnLearnMore,
  ContainerImg,
  ContainerInform,
  ImgCatalog,
  InformPAragraph,
  MakeModalYear,
  ModelCar,
  RentalPrice,
} from '../Catalog/Catalog.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/selectors';
import { addFavoriteModel, removeFavoriteModel } from '../../redux/cars/favoritesSlice';

const CatalogItem = ({ car, onLearnMore }) => {
  const { id, img, make, model, year, address, type, accessories,
    rentalCompany, functionalities, mileage, rentalPrice } = car;
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);
  const [favoriteCar, setFavoriteCar] = useState(false);
  
  useEffect(() => {
    if (favoriteCarsId?.some((favoriteCar) => favoriteCar.id === id)) {
      setFavoriteCar(true);
    } else {
      setFavoriteCar(false);
    }
  }, [favoriteCarsId, id]);

  const handleFavorite = () => {
    favoriteCar ? dispatch(removeFavoriteModel(id)) : dispatch(addFavoriteModel(car));
  };

  return (
    <ContainerInform>
      <ContainerImg>
        <ImgCatalog src={img} alt={`${make} ${model}`} />
        <BtnIcon
          type="button"
          onClick={handleFavorite}
          shape="circle"
          style={{ border: 'none', background: 'none' }}
        >
          <HeartOutlined
            style={{
              fontSize: '20px',
              color: favoriteCar ? "#3470ff" : "white",
            }}
          />
        </BtnIcon>
      </ContainerImg>
      <BlockInform>
        <BlockPriceYear>
          <MakeModalYear>
            {make} <ModelCar>{model}</ModelCar>, {year}{' '}
          </MakeModalYear>
          <RentalPrice>{rentalPrice}</RentalPrice>
        </BlockPriceYear>
        <InformPAragraph>
          {address && (
            <span>
              {address.split(' ')[address.split(' ').length - 2].slice(0, -1)} |{' '}
              {address.split(' ')[address.split(' ').length - 1]}
            </span>
          )}{' '}
          | {rentalCompany} | {accessories[2]} | {type} | {model} |{' '}
          {mileage} | {functionalities[0]}
        </InformPAragraph>
        <BtnLearnMore htmlType="submit" type="primary" onClick={() => onLearnMore(car)}>
          Learn more
        </BtnLearnMore>
      </BlockInform>
    </ContainerInform>
  );
};

export default CatalogItem;
