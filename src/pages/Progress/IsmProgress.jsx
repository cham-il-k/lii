import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { ProgressContainer,StoryContainer, 
    MainStory, SideStory, SearchBar, ProfilData,
      FormInputSearch, SearchIcon } from './ismProgress.styled'
import { withRouter } from 'react-router-dom';
import { faSearch, faHashtag, faBell, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IsmProgressHeader from '../../components/IsmProgressHeader/IsmProgressHeader'
import IsmFormInput from '../../components/IsmFormInput/IsmFormInput';

const IsmProgress = () => {
            return (
                <ProgressContainer>
                    <IsmProgressHeader />
                    <ProfilData />
                    <StoryContainer>
                    <MainStory/>
                    <SideStory />
                    </StoryContainer>

                </ProgressContainer>
            )
    }
const mapStateToProps = ({ profil:{currentProfil} }) => {
    return {
        currentProfil
    }
}
export default withRouter(connect(mapStateToProps, null)(IsmProgress));