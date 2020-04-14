import styled from 'styled-components'
import {c_overlay, maxWidth, f_blanc} from './components/variables'

export const AppContainer =  styled.div`
    background-color: ${f_blanc};
    color: ${c_overlay};
    padding:  auto;
    text-align: center;
  display: flex;
  margin: auto;
  position:relative;
  flex-direction: column;
  max-width:${maxWidth};
  height:100vh;
  `