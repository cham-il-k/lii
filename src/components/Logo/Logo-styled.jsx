import styled  from 'styled-components'
import {Link} from 'react-router-dom'
import {f_blanc,f_overlay,fluo,f_blue,f_vert,dark_grey} from '../variables'

export const LogoContainer = styled.div`
    font-size: 1.4rem;
    background-color: ${f_blanc};
    color: ${fluo};
    width:20%;
    height:100%;
    flex-direction:column;
    display:flex;
    position:fixe;
        > a {
            text-decoration:none
    }
    `
    export const NavItem = styled(Link)`
    color: ${dark_grey};
    line-height:2rem;
    text-decoration:none;
    text-transform: uppercase;
    cursor: pointer;
    margin:0 auto;
    
`

export const TeteLogo = styled.div`
position: absolute;
top:0;
width:70px;
height:15px;
background-color: ${f_overlay};
color: ${dark_grey};
margin:1px auto;
`
export const YadLogo = styled.div`
position: absolute;
background-color: ${f_vert};
color: ${dark_grey};
top:16px;
left:0px;
width:10px;
height:50px;

`
export const CorLogo = styled.div`
position: absolute;
background-color: ${f_blue};
color: ${dark_grey};
top:16px;
right:0px;
width:30px;
height:30px;
index:1
`