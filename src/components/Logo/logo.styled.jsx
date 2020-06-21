import styled, {keyframes, css}  from 'styled-components'
import {Link} from 'react-router-dom'
import {textBlanc, blueHov, tete, yad, point, textBlack,cor, bleuDense,green2} from '../variables'
import { faTextWidth } from '@fortawesome/free-solid-svg-icons'

export const LogoContainer = styled.div`
    position: relative;
    font-size: 1.4rem;
    background-color: transparent;
    width:300px;
    flex-direction:column;
    display:flex;
      a {
            text-decoration:none
    }
    `
export const NameSite = styled(Link)`
    box-sizing:border-box;
    line-height:2rem;
    padding:0;
    text-decoration:none;
    text-transform: uppercase;
    cursor:pointer;
    margin-left:0 ;
    z-index:2;
    color: ${blueHov} ;
`

export const TeteLogo = styled.div`
position: absolute;
top:2px;
left: 10%;
height:3rem;
width:3rem;    
background:linear-gradient(${tete},${cor});
margin:2px;
transform: rotate(-45deg);
border-radius: 2px;
`
export const YadLogo = styled.div`
position: absolute;
background: linear-gradient(${yad},${tete}) ;
color: ${textBlanc};
top:25px;
left:80px;
width:30px;
height:130px;
transform: rotate(45deg);
border-radius: 5px;
`
const bat = keyframes`
  from {
    transform: scale(1.5) rotate(45deg);
}

  to {
    transform: scale(1) rotate(45deg);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const CorLogo = styled.div`
position: absolute;
background: linear-gradient(${cor},${point} );
color: ${textBlack};
top:60px;
left:20px;
width:50px;
height:50px;
z-index:1;
animation: ${bat} 2s linear infinite;
transition:transform 2s linear infinite;
border-radius: 3px;

`
export const Point = styled.div`
position: absolute;
background-color: ${point};
color: ${textBlack};
top:125px;
left:30px;
width:30px;
height:30px;
transform: rotate(45deg);
border-radius: 3px;
`
