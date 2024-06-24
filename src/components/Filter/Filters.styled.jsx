import styled from '@emotion/styled';
import { Button } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 50px;
  margin-bottom: 30px;
  gap: 10px;
  align-items: center;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;

`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;

export const InputFrom = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

export const InputTo = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none !important;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

export const SpanFrom = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const SpanTo = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const BtnSearch = styled(Button)`
  width:136px;
  height: 48px;
  border-radius: 12px;
  margin-left: 18px;
`