import { useState, useEffect } from 'react';

import { getAllCars } from '../../service/apiRequest';

import NavBar from '../NavBar/NavBar';
import CatalogItem from '../CatalogItem/CatalogItem';
import ModalCar from '../ModalLearnMore/ModalLearnMore';
import Filter from '../Filter/Filter';
import { Loader } from '../Loader/Loader';

import { Container, LinkLoadMore, NotFilters } from './Catalog.styled';

const Catalog = () => {
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCars(page);
        setCarsData((prevData) => [...prevData, ...data.filter((car) => !prevData.some((prevCar) => prevCar.id === car.id))]);
      } catch (error) {
        console.error('Error fetching car data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    if (isFiltering) {
      if (Object.values(filters).some(Boolean)) {
        const updatedFilteredAdverts = carsData.filter(({ make, rentalPrice, mileage }) => {
          const passMakeFilter = !filters.make || make === filters.make;
          const passPriceFilter = !filters.filteredPrices.length || filters.filteredPrices.some(
            ({ value }) => value === rentalPrice.replace('$', '')
          );
          const passMinMileageFilter = !filters.minMileage || mileage >= filters.minMileage;
          const passMaxMileageFilter = !filters.maxMileage || mileage <= filters.maxMileage;

          return passMakeFilter && passPriceFilter && passMinMileageFilter && passMaxMileageFilter;
        });

        setFilteredAdverts(updatedFilteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, carsData, isFiltering]);

  const carMakes = [...new Set(carsData.map(({ make }) => make))];
  const carPrices = [...new Set(carsData.map(({ rentalPrice }) => rentalPrice.replace('$', '')))];
  const carMileage = [...new Set(carsData.map(({ mileage }) => mileage))];
  const minCarMileage = Math.min(...carMileage);
  const maxCarMileage = Math.max(...carMileage);

  const handleBtnLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldShowLoadMoreButton = carsData.length % 12 === 0 && carsData.length > 0 && !isFiltering;

  const handleLearnMore = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setIsFiltering(true);
  };

  return (
    <div>
      <NavBar />
      <Filter
        carMakes={carMakes}
        carPrices={carPrices}
        minMileage={minCarMileage}
        maxMileage={maxCarMileage}
        onFilterChange={handleFilterChange}
      />
      {isFiltering && filters.make && filteredAdverts.length > 0 ? (
        filteredAdverts.map((car) => (
          <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
        ))
      ) : (
        <>
          {isFiltering && filters.make ? (
            <NotFilters>Regrettably, we&#39;re currently unable to provide any offerings related to the selected items.</NotFilters>
          ) : (
            <Container>
              {carsData.map((car) => (
                <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
              ))}
            </Container>
          )}
        </>
      )}
      {isLoading && <Loader />}
      {!isLoading && shouldShowLoadMoreButton && (
        <LinkLoadMore variant="text" onClick={handleBtnLoadMore}>
          Load more
        </LinkLoadMore>
      )}
      {selectedCar && (
        <ModalCar car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Catalog;