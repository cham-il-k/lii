import React from 'react';
import { connect } from 'react-redux';
import { faSearch, faHome, faHashtag, faBell, faEnvelope, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createStructuredSelector } from 'reselect'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SearchBar,
  SearchIcon,
  FormInputSearch,
} from './ismProgressHeader.styled';
const IsmProgressHeader = ({ profil, hidden }) => (

  <HeaderContainer>
    <OptionsContainer>
      <OptionLink to='/profil' ><FontAwesomeIcon icon={faHome} />home
        </OptionLink>
      <OptionLink to='/progress' > <FontAwesomeIcon icon={faHashtag} /> progress</OptionLink>
      <OptionLink to='/program' > <FontAwesomeIcon icon={faBell} />
        Program</OptionLink>
      <OptionLink as='div'  onClick={() => alert('sign Out')}><FontAwesomeIcon icon={faEnvelope} />Messages 
      </OptionLink>
      <OptionLink as='div'  onClick={() => alert('sign Out')}><FontAwesomeIcon icon={faSignOutAlt} />Logout 
      </OptionLink>
    </OptionsContainer>
    <SearchBar>
                    <SearchIcon icon={faSearch} />
                    <FormInputSearch />
      </SearchBar>
                    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  });

export default connect(mapStateToProps)(IsmProgressHeader);
