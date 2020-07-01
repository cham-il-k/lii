import React, { useState, useEffect } from 'react';
import { ProgressContainer,StoryContainer, 
    MainStory, SideStory, SearchBar, ProfilData,
      FormInputSearch, SearchIcon } from './ismProgress.styled'
import { withRouter } from 'react-router-dom';

const IsmProgress = ({match}) => {

    useEffect(() => {
        console.log(`IsmProgress ${match}`)
    })
            return (
                <ProgressContainer>
                    <ProfilData >
                        profil
                    </ProfilData>
                    <StoryContainer>
                        story
                    </StoryContainer>
                    
            </ProgressContainer>
            )
    }

export default withRouter(IsmProgress);