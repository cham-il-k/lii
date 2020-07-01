import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../Cart-Icon/Cart-Icon';

import { createStructuredSelector } from 'reselect'

import Logo  from '../Logo/Logo';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header-styled';
const Header = ({ profil, hidden }) => (

  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo  />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/profil' style={{display:"none"}}>Profil</OptionLink>
      <OptionLink to='/progress' style={{display:"none"}}>Progress</OptionLink>
      <OptionLink to='FETCH_PROGRAM_START/programs' style={{display:"none"}}>Programs</OptionLink>
      <OptionLink as='div' style={{display:"none"}} onClick={() => alert('sign Out')}>
        SIGN OUT
      </OptionLink>
      <OptionLink to='/signup'>SIGN in/up </OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  });

export default connect(mapStateToProps)(Header);
