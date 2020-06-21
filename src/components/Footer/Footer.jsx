import React from 'react'
import {FooterContainer, NavigationContainer,CustomLinkContainer, CopyRight, LogoContainer } from './footer.styled'
import LogoBox from '../../components/Logo/Logo'
const Footer = ({loading,error}) => {
return (
        <FooterContainer>
            <LogoContainer>
                <LogoBox/>
            </LogoContainer>
            <NavigationContainer>
                <CustomLinkContainer to='/'>company</CustomLinkContainer> 
                <CustomLinkContainer to='/contact'>contact</CustomLinkContainer> 
                <CustomLinkContainer to='/careers'>careers</CustomLinkContainer> 
                <CustomLinkContainer to='/policy'>policy</CustomLinkContainer> 
                <CustomLinkContainer to='/terms'>terms</CustomLinkContainer> 
            </NavigationContainer>
            <CopyRight>
                Built by &copy; 
                    <span className="navbar-brand ">lami1a 2020
                    </span>
            </CopyRight>
            </FooterContainer>
    )
}
export default (Footer)