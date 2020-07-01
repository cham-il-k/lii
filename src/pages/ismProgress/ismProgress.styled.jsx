import styled from 'styled-components'    
import {maxWidth,blanc, green3, textBlack, blue1, blue2 } from '../../components/variables'


export const ProgressContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
   
`
export const StoryContainer = styled.div`
width:50%;  
`
export const ProfilData = styled.div`
width:50%
`


 
export const HomeContainer = styled.div`
    max-width: ${maxWidth} ;
    margin: 0 auto;
    background:${blanc};
    width:100%;
    height:100vh;
    box-shadow: 1px 1px 15px ${green3}   ;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding:0 auto;
`
export const SignupContainer = styled.div`
    display:grid;
    width:100%;
    height:100vh;
    grid-template-columns:minmax(5rem, 1fr) 2fr minmax(5rem, 1fr);
    grid-template-rows:repeat(2, min-content) 1fr;  
    grid-row-gap:1.5rem;

`