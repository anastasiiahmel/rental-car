import { useEffect } from 'react';

import { AccessoriesFunct, AddressData, BtnRentalCar, CloseButton, ImgModal, InformCar, MachineDescription, MakeModalYear, ModalContent, ModalOverlay, StyledList, TitleInform } from './ModalLearnMore.styled';
import { message } from 'antd';

const ModalCar = ({ car, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = () => onClose();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  const handleRentalCarClick = () => {
    const phoneNumber = '+380730000000';
    message.success(`Please call us at: ${phoneNumber}`)

  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>✖</CloseButton>
        <ImgModal src={car?.img} alt={`${car?.make} ${car?.model}`} />
        {car && (
          <InformCar>
            <MakeModalYear>{`${car.make} ${car.model}, ${car.year}`}</MakeModalYear>
            <AddressData>
              {car.address && (
                <span>
                  {car.address.split(' ')[car.address.split(' ').length - 2].slice(0, -1)} |{' '}
                  {car.address.split(' ')[car.address.split(' ').length - 1]}
                </span>
              )} | Id: {car.id} | Year: {car.year} | Type: {car.type} | Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}
            </AddressData>
            <MachineDescription>
              {`The ${car.make} ${car.model} is a stylish and spacious ${car.type} known for its comfortable ride and luxurious features.`}
            </MachineDescription>
            <TitleInform>Accessories and functionalities:</TitleInform>
            <AccessoriesFunct>
              {car.accessories?.slice(0, 3).map((accessory, index) => (
                <span key={index}>{accessory} | </span>
              ))}
              {car.functionalities?.slice(0, 3).map((functionality, index) => (
                <span key={index}>{functionality} | </span>
              ))}
            </AccessoriesFunct>
            <TitleInform>Rental Conditions:</TitleInform>
            {car.rentalConditions && (
              <StyledList>
                {car.rentalConditions.split('\n').map((condition, index) => (
                  <li key={index} className={`class-${index}`}>
                    {index === 0 ? (
                      <span>
                        {condition.split(/(\d+)/).map((part, i) => (
                          isNaN(part) ? (
                            part
                          ) : (
                            <span style={{ color: 'rgba(52, 112, 255, 1)' }} key={i}>{part}</span>
                          )
                        ))}
                      </span>
                    ) : (
                      condition
                    )}
                  </li>
                ))}
                <li>Mileage: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{car.mileage}</span></li>
                <li>Price: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{car.rentalPrice}</span></li>
              </StyledList>
            )}
            <BtnRentalCar htmlType='submit' type="primary" onClick={handleRentalCarClick}>
    Rental car
</BtnRentalCar>
          </InformCar>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalCar;
