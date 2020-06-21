import styled, { css } from 'styled-components';
import {green2,green3,blue3, blue41} from './../variables'
import {Link} from 'react-router-dom'


export const RadioContainer = styled.div`
  color: ${blue3};
  border: none;
  font-size:1.4rem;
  width:5rem;
  height:2rem;
  cursor:pointer;
`
export const RadioParent = styled.div`
display:flex;
justify-content:center;
margin-right:2rem;
`
export const RadioLabel = styled.label`
  font-size:1.6rem;
  font-weight:300;
  margin-right:.3rem;
  width:5rem;
  height:2rem;
  
  cursor:pointer;
` 