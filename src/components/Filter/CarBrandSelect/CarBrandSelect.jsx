
import SelectStyles from './CarBrandSelect.styled';

const CarBrandSelect = ({ selectedMake, setSelectedMake, makeOptions, onClear }) => (
  <SelectStyles
    id="nameSelect"
    placeholder="Enter the text"
    value={selectedMake}
    isClearable={true}
    onChange={(selectedOption) => {
      setSelectedMake(selectedOption);
      if (!selectedOption) {
        onClear();
      }
    }}
    options={makeOptions}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

const PriceSelect = ({ selectedPriceStep, selectedPriceLabel, handlePriceStepChange, priceRangeOptions }) => (
  <SelectStyles
    id="priceSelect"
    placeholder="To $"
    value={selectedPriceStep ? { value: selectedPriceStep, label: selectedPriceLabel } : ""}
    onChange={handlePriceStepChange}
    options={priceRangeOptions}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

export { CarBrandSelect, PriceSelect };
