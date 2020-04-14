import React from 'react';
import { connect } from 'react-redux';

import { auth } from './../../util/auth.firebase';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../store/selectors/cart';
import { selectCurrentProfil } from '../../store/selectors/profil';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header-styled';
const Header = ({ profil, hidden }) => (

  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {profil ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signup'>SIGN in/up </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  profil: selectCurrentProfil,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
