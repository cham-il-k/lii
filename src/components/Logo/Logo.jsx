import React from 'react'
import {TeteLogo, LogoContainer, CorLogo,YadLogo, NavItem} from './Logo-styled'

// google, inverted, handleClick
export default function LogoBox({ children, ...props}) {
    return (
        <LogoContainer {...props}>
            <NavItem to="/">
                   lami1a
            </NavItem>{/* 
            <TeteLogo />
            <CorLogo />
            <YadLogo/> */}
            
        </LogoContainer>
    )
}
