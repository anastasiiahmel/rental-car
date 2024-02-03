import { useState, useEffect } from 'react';
import { getAllCars } from '../../service/apiRequest';
import Modal from '../modalLearnMore/modalLearnMore';

import { Container, LinkLoadMore } from './Catalog.styled';
import CatalogItem from '../CatalogItem/CatalogItem';

const Catalog = () => {
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCars(page);
        setCarsData((prevData) => [...prevData, ...data.filter((car) => !prevData.some((prevCar) => prevCar.id === car.id))]);
      } catch (error) {
        console.error('Помилка при отриманні даних про автомобілі:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleBtnLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldShowLoadMoreButton = carsData.length % 12 === 0 && carsData.length > 0;

  const handleLearnMore = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div>
      <h1>Welcome to Car Rentals</h1>
      <Container>
        {carsData.map((car) => (
          <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
        ))}
      </Container>
      {!isLoading && shouldShowLoadMoreButton && (
        <LinkLoadMore variant="text"  onClick={handleBtnLoadMore}>Load more</LinkLoadMore> 
      )}
      {selectedCar && (
        <Modal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Catalog;
