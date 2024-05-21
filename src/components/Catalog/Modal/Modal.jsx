import { useEffect } from 'react';

import { AccessoriesFunct, AddressData, BtnRentalCar, CloseButton, ImgModal, InformCar, MachineDescription, MakeModalYear, ModalContent, ModalOverlay, StyledList, TitleInform } from './Modal.styled';
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
  const { img, make, model, year, address, id, type, fuelConsumption, engineSize, accessories, functionalities, rentalConditions, mileage, rentalPrice } = car;

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>✖</CloseButton>
        <ImgModal src={img} alt={`${make} ${model}`} />
        {car && (
          <InformCar>
            <MakeModalYear>{`${make} ${model}, ${year}`}</MakeModalYear>
            <AddressData>
              {address && (
                <span>
                  {address.split(' ')[address.split(' ').length - 2].slice(0, -1)} |{' '}
                  {address.split(' ')[address.split(' ').length - 1]}
                </span>
              )} | Id: {id} | Year: {year} | Type: {type} | Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </AddressData>
            <MachineDescription>
              {`The ${make} ${model} is a stylish and spacious ${type} known for its comfortable ride and luxurious features.`}
            </MachineDescription>
            <TitleInform>Accessories and functionalities:</TitleInform>
            <AccessoriesFunct>
              {accessories?.slice(0, 3).map((accessory, index) => (
                <span key={index}>{accessory} | </span>
              ))}
              {functionalities?.slice(0, 3).map((functionality, index) => (
                <span key={index}>{functionality} | </span>
              ))}
            </AccessoriesFunct>
            <TitleInform>Rental Conditions:</TitleInform>
            {rentalConditions && (
              <StyledList>
                {rentalConditions.split('\n').map((condition, index) => (
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
                <li>Mileage: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{mileage}</span></li>
                <li>Price: <span style={{ color: 'rgba(52, 112, 255, 1)' }}>{rentalPrice}</span></li>
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

export  default ModalCar ;