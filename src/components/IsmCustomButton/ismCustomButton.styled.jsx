import styled, { css } from 'styled-components';
import {greenAzur,greenFin,bleuDense, blanc} from '../variables'
import {Link} from 'react-router-dom'

const buttonStyles = css`
  background-color: ${bleuDense};
  color: white;
  border: none;

  &:hover {
    background-color: ${greenAzur};
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

const googleSignInStyles = css`
  background-color: ${greenFin};
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 3rem;
  line-height: 1.5rem;
  padding: .5rem  1.3rem;
  font-size: 1.5rem;
  background-color:#1aa1f5;
  color:${blanc};
  border-radius:4rem;
  border: .1rem solid #1aa1f5;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight:300;
  cursor: pointer;
  display: flex;
  justify-content: center;

`;
export const CustomLinkContainer = styled(Link)`
  min-width: 165px;
  width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;

  justify-content: center;

  ${getButtonStyles}
`;
