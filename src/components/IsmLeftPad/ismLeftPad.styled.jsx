import styled, {css} from 'styled-components';
import { back, bleuBack, greenFin, textBlack, bleuDense, maxWidth, contJaune, textBleu, contMarron, backButton, textBlanc } from '../variables';

export const IsmaiPageContainer = styled.div`
  display: grid;
  position:relative;
  grid-template-columns:repeat(2, 1fr);
  grid-template-rows: 1fr min-content;
  max-width:${maxWidth};
  justify-content:center;
  background-color:${back};
  width:100%;
  height:100vh;

`;
const Left = css`
grid-column:1 / 2;
grid-row: 1 / 2;
`
export const IsmaiLeftContainer = styled.div`
  display: flex;
  grid-column:1 / 2;
  grid-row: 1 / 2;
  font-size:2rem;
  justify-content:space-evenly;
  align-items:center;
  background-color:${bleuBack};
  color:${textBlanc};
  border:2px solid ${contJaune};
`
export const IsmaiRightContainer = styled.div`
  display: flex;
  position: relative;
  grid-column:2/-1;
  grid-row:1/2;
  padding:5rem auto;
  flex-direction:column;
  align-items:center;
  border: 2px solid ${contMarron};
`
export const IsmaiFormContainer = styled.div`
display:flex;
justify-content:center;
margin-top:3rem;

`
export const IsmaiFormInput = styled.input.attrs(props => ({
    type:props.type,
    size:props.size || '1rem'
    }))`
color:${textBleu};
    position:relative;
    width:10rem;
    border: 1px solid ${bleuDense};
    margin-right:1rem;
    border-radius:.5rem;
    /* background-color:transparent; */
    height:3rem;
    padding:.5rem;
    transition:all .3s; 
    &:focus {
      outline:none;
      background-color:transparent;
      
  }
`
export const IsmaiJoin = styled.div`
  position:absolute;
  font-size:2.3rem;
  top:50%;
  display:flex;
  flex-direction: column;
  align-items: center;
  color:${textBlack};
  width: 70%;
  & > h2{
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  & > span {
    font-size: 5rem;
    margin-bottom:2rem;
  }
`
export const Ismaibutton = styled.button`
/* background-color:${greenFin}; */
font-size:1.5rem;
height:3rem;
width:7rem;
border-radius:3rem;
border:.1rem solid  ${bleuDense};
color:${bleuBack};
outline:none;
transition: all .3s;
&:hover {
  cursor:pointer;
  background-color:${bleuBack};
  color:${greenFin};
}
&:active {
  outline:none;
}
`
export const LabelDiv = styled.div`
  display:block;
  position: absolute;
  font-weight:300;
  font-size:1.3rem;
  top:8rem;
  left:50%;
  transform: translateX(-50%);
`

export const IsmaiTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  color:${textBleu};
  text-transform: uppercase;
`;

export const IsmaiItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
