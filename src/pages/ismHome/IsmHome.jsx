import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { HomeContainer,SignupContainer } from './ismHome.styled'
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header'
import IsmSignUp from '../../components/IsmSignUp/IsmSignUp'
const IsmHomePage = () => {
            return (

                <HomeContainer>
                    <SignupContainer>
                    <Header />
                    <IsmSignUp/>
                    </SignupContainer>

                </HomeContainer>
            )
        }
    
const mapStateToProps = ({ profil:{currentProfil} }) => {
    return {
        currentProfil
    }
}
export default withRouter(connect(mapStateToProps, null)(IsmHomePage));