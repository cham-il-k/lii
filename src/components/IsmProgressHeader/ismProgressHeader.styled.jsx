import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blanc, green2, blue3,textBlack, blue1, blue2 }  from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.nav`
  position:fixed;
  height:11rem;
  width:100%;
  display: flex;
  flex-direction:column;
  background-color:white;
  justify-content:space-evenly;
  padding:2rem auto;
  margin:auto;
box-shadow:0 0 .7rem rgba(0,0,0,0.3 ); 
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  list-style:none;
 `;

export const SearchBar = styled.div`
    width:100%;
    height:5rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;    
`
export const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 2.5rem;

    color:${blue2};

`
export const FormInputSearch = styled.input`
  background: none;
  background-color: ${blanc};
  color: ${textBlack};
  
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: .5rem;
  border-bottom: 1px solid ${blue1};
  &:focus {
    outline: none;
  }
  `
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
