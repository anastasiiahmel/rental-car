
import { BlockInform, BlockPriceYear, BtnLearnMore, ContainerImg, ContainerInform, ImgCatalog, InformPAragraph, MakeModalYear, ModelCar, RentalPrice } from '../Catalog/Catalog.styled';
const CatalogItem = ({ car, onLearnMore }) => (
  <ContainerInform>
    
    <ContainerImg>
      <ImgCatalog src={car.img} alt={`${car.make} ${car.model}`} />

      </ContainerImg>
    <BlockInform>
      <BlockPriceYear>
      <MakeModalYear>
        {car.make} <ModelCar>{car.model}</ModelCar>, {car.year}{' '}
        </MakeModalYear>
        <RentalPrice>{car.rentalPrice}</RentalPrice>
        </BlockPriceYear>
      <InformPAragraph>
        {car.address && (
          <span>
            {car.address.split(' ')[car.address.split(' ').length - 2].slice(0, -1)} | {' '}
            {car.address.split(' ')[car.address.split(' ').length - 1]}
          </span>
        )} | {car.rentalCompany} | {car.accessories[2]} | {car.type} | {car.model} | {car.mileage} | {car.functionalities[0]}
      </InformPAragraph>
      <BtnLearnMore
        htmlType='submit'
        type='primary'
        onClick={() => onLearnMore(car)}
      >
        Learn more
      </BtnLearnMore>
    </BlockInform>
  </ContainerInform>
);

export default CatalogItem;
