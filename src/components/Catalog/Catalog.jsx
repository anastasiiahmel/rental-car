import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getAllCars } from '..//../service/apiRequest';
import { BlockInform, BtnLearnMore, Container, ContainerInform, ImgCatalog, InformPAragraph, MakeModalYear, ModelCar, RentalPrice } from './Catalog.styled';

const Catalog  = () => {
  // const navigate = useNavigate();
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCars();   
        setCarsData(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
    fetchData();
  }, []);

// onClick={() => navigate(`/car/${car.id}`)}
  return (
     
    <div>
      <h1>Welcome to Car Rentals</h1>
      <Container>
        {carsData.map((car) => (
          <ContainerInform key={car.id}>
            <ImgCatalog src={car.img} alt={`${car.make} ${car.model}`}/>
            <BlockInform>
              <MakeModalYear> {car.make} <ModelCar>{car.model}</ModelCar>, {car.year}  <RentalPrice>{car.rentalPrice}</RentalPrice></MakeModalYear>
              <InformPAragraph>
                {car.address && (
                  <span>
                    {car.address.split(' ')[car.address.split(' ').length - 2].slice(0, -1)},{' '}
                    {car.address.split(' ')[car.address.split(' ').length - 1]}
                  </span>
                )} | {car.rentalCompany} | {car.accessories[2]} | {car.type} | {car.model} | {car.mileage} | {car.functionalities[0]}
              </InformPAragraph>
              <BtnLearnMore htmlType='submit' type='primary'>Learn more</BtnLearnMore>
            </BlockInform>
          </ContainerInform>
        ))}
      </Container>
    </div>
  );
};

export default Catalog;
