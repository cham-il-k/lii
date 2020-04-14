import React, {Component } from 'react';
import User from './User';
import { Route, Redirect} from 'react-router-dom';
import './Users.css';


class Users extends Component {
    state = {
        error: false,
        loading: false
    };

  // handleUserChange=      
    postSelectUser = (index) => {
        console.log(`User ${index} est clické`);
    }
    render() {
        let users = <Redirect to="/" />;
        if( this.props.users ) {
            if (!this.state.error) {
                progs = this.props.prgs.map((User, index)    => {
                    return <User name = {
                        User.name
                    }
                    type = {
                        User.type
                    }
                    soura = {
                        User.soura
                    }
    
                    key = {
                        index + '' + User.name
                    }
                    UserSelected = {
                        this.props.postSelectUser(User)
                    } 
                    /> 
                })
            }
        }
        
        return (
        <div className = "User-container" >
            <h1 className = "User-header" > 
                    Users 
            </h1> 
            <main className = "main-content"> 
                {progs}
            </main> 
            </div >

        );
    }
};



export default Usrss;