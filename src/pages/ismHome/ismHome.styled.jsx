import styled from 'styled-components'    
import {maxWidth,blanc, green3 } from '../../components/variables'
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