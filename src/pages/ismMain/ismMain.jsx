import React, { Component, } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Selection from '../../components/IsmProgram/IsmProgram'
import About from '../about/about'
import IsmProgressHeader from '../../components/IsmProgressHeader/IsmProgressHeader'
import IsmHomePage from '../ismHome/ismHome';
import IsmaiPage from '../ismai/ismai'


import IsmProgress from '../ismProgress/ismProgress'
import IsmPrograms from '../ismPrograms/ismPrograms'
import { MainContainer } from'./ismMain.styled.jsx';

const IsmMainPage =() => {
 return (
            <Switch>
                <IsmProgressHeader/>
                <MainContainer>
                    <Route exact path='/' component={IsmProgress} />
                    <Route exact path='/programs' component={IsmPrograms} />
                   {/*  <Route exact path='/' component={ IsmaiPage} />
                    */}
                    <Route exact path='/signup' render={() => {
                        return this.currentProfil ? (<Redirect to='/progress' />) : (<IsmHomePage />)
                        }
                    }/>
                </MainContainer>
            </Switch>
        )
    }

export default IsmMainPage
