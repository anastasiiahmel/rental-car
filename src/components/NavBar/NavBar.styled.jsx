import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: 'Manrope';
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;

  &.active {
    color: #3470ff;
  }
`;