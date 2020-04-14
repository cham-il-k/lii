import React from 'react'
import {FooterContainer, NavigationContainer,CustomLinkContainer, CopyRight } from './Footer-styled'
import LogoBox from '../../components/Logo/Logo'
const Footer = ({loading,error}) => {
return (
        <FooterContainer>
            <LogoBox/>
            <NavigationContainer>
                <CustomLinkContainer to='/'>company</CustomLinkContainer> 
                <CustomLinkContainer to='/contact'>contact us</CustomLinkContainer> 
                <CustomLinkContainer to='/careers'>careers</CustomLinkContainer> 
                <CustomLinkContainer to='/policy'>policy</CustomLinkContainer> 
                <CustomLinkContainer to='/terms'>terms</CustomLinkContainer> 
                    
            </NavigationContainer>
            <CopyRight>
                Built by &copy; 
                    <span className="navbar-brand ">lami1a
                    </span>
            </CopyRight>
            </FooterContainer>
)
         
}
export default (Footer)