import React, { Component} from 'react';
//import { BrowserRouter } from 'react-router-dom';
import './Layout.css';      
import  { BrowserRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
//import absPath from './../../util/absPath';
import Header from './../Header/Header';
import Programs from '../adminCollection/Program/Programs';
import Tablets from '../Tablet/Tablets';
import Cart from '../Tablet/Tablets';
import Auth from './../Auth/Auth';
import AddProgram from '../adminCollection/Program/AddProgram';
 /*import SideBar from  './../../containers/shared/Navigation/Side/SideBar';
import Main from './../Main/Main';
 */
class Layout extends Component   {
    render() {
        return(
            <div className="liil-container">
                <Header   className="main-header" profil= {this.props.profil }>
                    {this.children}
                </Header>
                
            </div>
            );
    }; 
    }

const mapStateToProps = ( state ) => {
    return {
        programs : state.program.programs,
        profil: state.profil.profil,
        tablets: state.tablet.tablets,
        carts: state.cart.carts,
    }
}

    
export default connect(mapStateToProps)(Layout);