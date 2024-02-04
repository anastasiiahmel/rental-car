import { useState } from 'react';

import { CarBrandSelect, PriceSelect } from './CarBrandSelect/CarBrandSelect';

import {
  BtnSearch,
  Container,
  Form,
  InputContainer,
  InputFrom,
  InputTo,
  Label,
  SelectContainer,
  SpanFrom,
  SpanTo,
} from './Filters.styled';
import { message } from 'antd';

function Filter({ carMakes, carPrices, onFilterChange }) {
  const [selectedCarMake, setSelectedCarMake] = useState('');
  const [selectedCarPriceStep, setSelectedCarPriceStep] = useState(null);
  const [selectedCarPriceLabel, setSelectedCarPriceLabel] = useState('');
  const [minMileageValue, setMinMileageValue] = useState('');
  const [maxMileageValue, setMaxMileageValue] = useState('');

  const makeOptions = carMakes.map(make => ({ value: make, label: make }));

  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = selectedOption => {
    setSelectedCarPriceStep(selectedOption.value);
    setSelectedCarPriceLabel(selectedOption.label);
  };

  const filteredPrices = carPrices.filter(price => price <= selectedCarPriceStep);

  const formatMileage = value => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = e => {
    setMinMileageValue(e.target.value);
  };

  const handleMaxInputChange = e => {
    setMaxMileageValue(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (
      parseInt(minMileageValue.replace(/,/g, ''), 10) >
      parseInt(maxMileageValue.replace(/,/g, ''), 10)
    ) {
      message.error('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    const newFilters = {
      make: selectedCarMake ? selectedCarMake.value : '',
      filteredPrices: filteredPrices.map(price => ({
        value: price,
        label: `${price}`,
      })),
      minMileage: parseInt(minMileageValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxMileageValue.replace(/,/g, ''), 10),
    };

    onFilterChange(newFilters);
  };

  return (
    <Container>
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <CarBrandSelect
          selectedMake={selectedCarMake}
          setSelectedMake={setSelectedCarMake}
          makeOptions={makeOptions}
        />
      </SelectContainer>

      <SelectContainer>
        <Label htmlFor="priceSelect">Price / 1 hour</Label>
        <PriceSelect
          selectedPriceStep={selectedCarPriceStep}
          setSelectedPriceStep={setSelectedCarPriceStep}
          selectedPriceLabel={selectedCarPriceLabel}
          handlePriceStepChange={handlePriceStepChange}
          priceRangeOptions={priceRangeOptions}
        />
      </SelectContainer>

      <Form>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputFrom
            type="text"
            value={formatMileage(minMileageValue)}
            onChange={handleMinInputChange}
          />
          <SpanFrom>From</SpanFrom>
          <InputTo
            type="text"
            value={formatMileage(maxMileageValue)}
            onChange={handleMaxInputChange}
          />
          <SpanTo>To</SpanTo>
          <BtnSearch type="primary" onClick={handleFilterSubmit}>Search</BtnSearch>
        </InputContainer>
      </Form>
    </Container>
  );
}

export default Filter;