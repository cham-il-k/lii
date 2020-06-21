import React, { Component, } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Selection from '../../components/Selection/Selection'
import About from '../about/about'
import Ismai from '../Ismai/Ismai'
import CheckoutPage from '../checkout/checkout.jsx'
import IsmHomePage from '../ismHome/IsmHome';
import IsmaiPage from '../Ismai/Ismai'

import IsmProgress from './../IsmProgress/IsmProgress'
import { MainContainer } from'./ismMain.styled.jsx';

const IsmMainPage =() => {


        return (
            <Switch>
                <MainContainer>
                    <Route exact path='/progress' component={IsmProgress} />
                    
                    <Route exact path='/' component={ IsmaiPage} />
                   <Route exact path='/signup' render={() => {
                        return this.currentProfil ? (<Redirect to='/progress' />) : (<IsmHomePage />)
                        }
                    }/>
                </MainContainer>
            </Switch>
        )
    }

const mapStateToProps = ({ profil:{currentProfil}, errors }) => {
    return {
        currentProfil,
        errors,
    }
}

export default connect(mapStateToProps)(IsmMainPage)
