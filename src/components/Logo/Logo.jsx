import React from 'react'
import {TeteLogo, LogoContainer, CorLogo,YadLogo, NameSite,Point} from './logo.styled'

// google, inverted, handleClick
export default function LogoBox({ children, ...props}) {
    return (
        <LogoContainer {...props}>
            <NameSite to="/"> isamai</NameSite>
            <TeteLogo />
            <CorLogo />
            <YadLogo/> 
            <Point/>
        </LogoContainer>
    )
}
