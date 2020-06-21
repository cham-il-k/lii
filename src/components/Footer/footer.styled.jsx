import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'
import {blanc, back, textBleu, greenGrey,greenFin, blue4, blueHov} from '../variables'

export const FooterContainer = styled.div`
    grid-column: 1/-1;
    grid-row: 2/-1;
    padding:1.5rem;
    border-top:.5rem solid ${greenGrey}; 
`
const buttonStyles = css`
  background-color: ${greenFin};
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
export const CustomLinkContainer = styled(Link)`
  width: 50%;
  height: 3rem;
  letter-spacing: 0.5px;
  padding: 0 5px 0 5px;
  font-size: 1.3rem;
  margin-left:1rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: 300;
  text-decoration:none;
  cursor: pointer;
  color: ${blue4};
  &:hover {
    color: ${blueHov};
    border: none;
  }
  `;

export const NavigationContainer = styled.div`
    color: ${blue4};
    padding: 1rem auto;
    margin-left:20%;
    font-size: 1.4rem;
     display: flex;
     text-decoration:none;
    justify-content: space-between;
    align-items: flex-start;
    
    position:absolute;
    bottom:0px;
`
export const LogoContainer = styled.div`
height:5rem;
position: relative;
height:5rem;
width:5rem;
`
export const CopyRight = styled.div`
    background-color: transparent; 
    margin-left:50%;
    color: ${blue4};
    padding: 1rem auto;
    font-size: 1rem;
    position:absolute;
    bottom:0px;
    transform: translateX(-50%);   
`