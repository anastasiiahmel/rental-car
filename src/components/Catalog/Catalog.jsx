import { useState, useEffect } from 'react';
import { getAllCars } from '../../service/apiRequest';
import ModalCar from './Modal/Modal';
import Filter from '../Filter/Filter';
import { Loader } from '../Loader/Loader';
import { LinkLoadMore } from './Catalog.styled';
import FilterCriteria from '../Filter/FilterCriteria/FilterCriteria';

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

  const carMakes = [...new Set(carsData.map(({ make }) => make))];
  const carPrices = [...new Set(carsData.map(({ rentalPrice }) => rentalPrice.replace('$', '')))];
  const carMileage = [...new Set(carsData.map(({ mileage }) => mileage))];
  const minCarMileage = Math.min(...carMileage);
  const maxCarMileage = Math.max(...carMileage);

  const handleBtnLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldShowLoadMoreButton = carsData.length % 12 === 0 && carsData.length > 0 && !isFiltering;

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setIsFiltering(true);
  };


  return (
    <div>
      <Filter
        carMakes={carMakes}
        carPrices={carPrices}
        minMileage={minCarMileage}
        maxMileage={maxCarMileage}
        onFilterChange={handleFilterChange}
      />
      <FilterCriteria
        carsData={carsData}
        filters={filters}
        isFiltering={isFiltering}
        setSelectedCar={setSelectedCar}
      />
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
