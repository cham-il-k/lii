import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'
import {blanc, dark_grey,greenAldi,c_overlay} from './../../components/variables'

export const FooterContainer = styled.div`
    background-color: ${dark_grey};
    color: ${blanc};
    padding: 1rem auto;
    font-size: 1.4rem;
    display: flex;
    width: 100%;
    height:50px;
    justify-content: center;
    align-items: center;
    position:fixe;
    bottom:0px
`
const buttonStyles = css`
  background-color: ${greenAldi};
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
/* 
const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return 'rien';
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};
 */
export const CustomLinkContainer = styled(Link)`
  width: 25%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  `;

export const NavigationContainer = styled.div`
    background-color: ${dark_grey};
    color: ${blanc};
    padding: 1rem auto;
    font-size: 1.4rem;
     display: flex;
     flex-direction:column
    justify-items: center;
    align-items: center;
    justify-contents:center;
    position:absolute;
    bottom:0px;
`

export const CopyRight = styled.div`
    background-color: ${dark_grey};
    color: ${blanc};
    padding: 1rem auto;
    font-size: 1.4rem;
   
    justify-items: center;
    align-items: center;
    position:absolute;
    bottom:0px;
`