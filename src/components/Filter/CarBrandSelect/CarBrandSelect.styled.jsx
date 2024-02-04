import styled from '@emotion/styled';
import Select from 'react-select';

const SelectStyles = styled(Select)`
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 8px;
  font-size: 16px;
  background-color: rgba(247, 247, 251, 1);

  .css-13cymwt-control{
      border: none;
      background-color: transparent;

  &:hover,
  &:focus {
    border: none !important;
    background-color: transparent !important;
  }
  }
`;

export default SelectStyles;
