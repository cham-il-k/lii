import React, { Component, } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Selection from '../../components/Selection/Selection'
import About from '../about/about'
//import NotFound from '../NotFound/NotFound'
import CheckoutPage from '../checkout/checkout.jsx'
import ShopPage from '../shop/shop.jsx'
import ProfilPage from '../profil/profil.jsx'
import Contact from '../contact/contact'

import SignUp from './../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn';
import { MainContainer } from'./main-styled.jsx';

class MainPage extends Component {

    render() {
        return (
            <Switch>
                <MainContainer>
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route  path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route  path='/profil' component={ProfilPage} />
                    
                    <Route exact path='/' component={ Selection} />
                    <Route exact path='/signup' render={() => {
                        return this.currentProfil ? (<Redirect to='/profil' />) : (<SignUp />)
                        }
                    }/>
                    <Route exact path='/signin' render={ () => {
                        return this.currentProfil ? (<Redirect to='/profil'/>) :(< SignIn/>)
                        }
                    } />
                

                </MainContainer>
                
                {/*
        Route exact path='/sign' component= { SignUpPage} />

                <Route path='*' component={NotFound} />

        
        <Route exact path='/signin' component= { SignInPage} />
        
        <Route exact path='/signup' component= { props =>
            <WithRouterSign 
            buttonText='Sign up'
            heading='Join Us'
            {...props}
            />
            }/>
            
        <Route exact path='/profil' render= {(props) => 
            <Profil  currentUser={this.props.currentUser} {...props}
            />
        }  /> 
       */}
            </Switch>
        )
    }
}
const mapStateToProps = ({ profil:{currentProfil}, errors }) => {
    return {
        currentProfil,
        errors,

    }
}

export default connect(mapStateToProps)(MainPage)
