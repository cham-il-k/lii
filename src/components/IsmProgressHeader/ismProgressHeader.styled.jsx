import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blanc,maxWidth, green2, blue3,textBlack, blue1, blue2, blue4 }  from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.nav`
  position:fixed;
  height:7rem;
  width:${maxWidth};
  display: flex;
  background-color:white;
  justify-content:space-between;
  align-items: center;
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
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  list-style:none;
 `;

export const SearchBar = styled.div`
    position:relative;
    height:100%;
    display:flex;
    justify-content:stretch;
    align-items:center;    
`
export const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    left:1rem;
    color:${blue2};
    align-self:center;
    position: absolute;
    cursor:pointer;

`
export const FormInputSearch = styled.input`
  background: none;
  background-color: ${blanc};
  color: ${textBlack};
  height:3rem;
  margin-right:1rem;  
  box-sizing:border-box;
  font-size: 1.3rem;
  padding: .5rem;
   border: none;
  border-radius: 2rem;
  border: 1px solid ${blue1};
  transition: all .3s;
  &:focus {
    outline: none;
    background-color:${blue1}

  }
  `
export const OptionLink = styled(Link)`
  padding: 1rem;
  text-decoration:none;
  color:${blue3};
  font-size:1.50rem;
  margin:0 1rem;
  cursor: pointer;
  & ::after {
    width:100%;
   content:"";
   height:.4rem;
   background-color:${green2}; 
    position: absolute;
  }
  &:active {
    color: ${blue4}
  }
`;
