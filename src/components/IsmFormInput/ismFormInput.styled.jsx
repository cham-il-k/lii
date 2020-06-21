import styled, { css } from 'styled-components';
import {blue1, blue41, textBlack } from '../variables';

const subColor = 'grey';
const mainColor = 'black';


export const GroupContainer = styled.div`
  grid-column:1/-1;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${textBlack};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 30rem;
    height:3rem;
    border: none;
    border-bottom: 1px solid #ddd;
    margin: 1rem 0;
    border-radius:1.5rem;
    transition: background-color .5s; 
  &:focus {
      outline: none;
      background-color:${blue1};

    }

  
  
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
`
