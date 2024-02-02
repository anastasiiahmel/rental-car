import {  ModelCar } from '../Catalog/Catalog.styled';
import { AccessoriesFunct, AddressData, CloseButton, ImgModal, InformCar, MachineDescription, MakeModalYear, ModalContent, ModalOverlay, TitleInform } from './modalLearnMore.styled';


const Modal = ({ car, onClose }) => {
  if (!car) {
    return null; 
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ImgModal src={car.img} alt={`${car.make} ${car.model}`} />
        <InformCar>
        <MakeModalYear>{car.make} <ModelCar>{car.model}</ModelCar>, {car.year}{' '}</MakeModalYear>
         <AddressData>
                {car.address && (
                  <span>
                    {car.address.split(' ')[car.address.split(' ').length - 2].slice(0, -1)} | {' '}
                    {car.address.split(' ')[car.address.split(' ').length - 1]}
                  </span>
                )}     |   Id: {car.id}     |     Year: {car.year}     |     Type: {car.type}     |     Fuel Consumption: {car.fuelConsumption}     |     Engine Size: {car.engineSize}
        </AddressData>
        <MachineDescription>The {car.make} {car.model} is a stylish and spacious {car.type} known for its comfortable ride and luxurious features.</MachineDescription>
        <TitleInform>Accessories and functionalities :
        </TitleInform>
        <AccessoriesFunct>
           {car.accessories[0]} | {car.accessories[1]} | {car.functionalities[0]} | {car.accessories[2]} | {car.functionalities[1]} | {car.functionalities[2]}
        </AccessoriesFunct>
         <TitleInform>Rental Conditions :
        </TitleInform>
          <ul>
            {car.rentalConditions && (
              <span>
                {car.rentalConditions.split('\n')[car.rentalConditions.split(' ').length - 7]} {' '}
                    {car.rentalConditions.split('\n')[car.rentalConditions.split(' ').length - 6]} {' '}
                {car.rentalConditions.split('\n')[car.rentalConditions.split(' ').length - 5]} {' '}
                  </span>
                )} 
            <li>Mileage: {car.mileage}</li> 
            <li>Price: {car.rentalPrice}</li> 
             
          </ul>
          </InformCar>
        <button>Rental car</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
