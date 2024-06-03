import { useEffect, useState } from "react";
import { NotFilters, Container } from "../../Catalog/Catalog.styled";
import CatalogItem from "../../CatalogItem/CatalogItem";

const FilterCriteria = ({ carsData, filters, isFiltering, setSelectedCar }) => {

  const [filteredAdverts, setFilteredAdverts] = useState([]);
   
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

  const handleLearnMore = (car) => {
    setSelectedCar(car); 
  };

  return (
    <>
      {isFiltering && filters.make && filteredAdverts.length > 0 ? (
        filteredAdverts.map((car) => (
          <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
        ))
      ) : (
        <>
          {isFiltering && filters.make ? (
            <NotFilters
              message="Regrettably, we&#39;re currently unable to provide any offerings related to the selected items."
              type="info"
              showIcon
            />
          ) : (
            <Container>
              {carsData.map((car) => (
                <CatalogItem key={car.id} car={car} onLearnMore={handleLearnMore} />
              ))}
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default FilterCriteria;
