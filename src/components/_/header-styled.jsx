import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { green2, blue3 } from '../variables';

export const HeaderContainer = styled.div`
  width:100%;
  display: grid;
  grid-column:2/3;
  grid-row:1/2;
  grid-gap:2rem;
  background-color:white;
  padding:2rem auto;
  margin:auto;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  list-style:none;
  
  `;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration:none;
  color:${blue3};
  font-size:1.6rem;
  margin:0 2rem;
  cursor: pointer;
  & ::after {
    width:100%;
   content:"";
   height:.4rem;
   background-color:${green2}; 
    position: absolute
  }
`;
