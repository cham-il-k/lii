import React, { Component } from 'react';
import { HomeContainer,SignupContainer } from './ismHome.styled'
import { withRouter } from 'react-router-dom';
import IsmSignUp from '../../components/IsmSignUp/IsmSignUp'
const IsmHomePage = () => {
            return (

                <HomeContainer>
                    <SignupContainer>
                    <IsmSignUp/>
                    </SignupContainer>

                </HomeContainer>
            )
        }
    
export default withRouter(IsmHomePage);