import styled from 'styled-components'
import { maxWidth, textBlack} from './components/variables'

export const AppContainer =  styled.div`
    max-width: ${maxWidth};
    background-color: white;
    color: ${textBlack};
    padding:  0 auto;
    text-align: center;
    margin: 0 auto;
    position:relative;
    max-width:${maxWidth};
    height:100vh;
    outline:none;
 `