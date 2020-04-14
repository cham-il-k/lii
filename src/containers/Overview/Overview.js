import React, {Component} from 'react';
import Layout from './../Layout/Layout';
import {connect} from 'react-redux';
import Spinner from './../../components/UI/Spinner/Spinner';
import { startauth } from './../../store/actions/auth'
import axios from 'axios';
import './overview.css';
import { timingSafeEqual } from 'crypto';

class Overview extends Component {

    state = {
        authenticated: false,
        loading:false,
        error:false
    }


    static async getInitialProps() {
     let userData = {};   
        try {
            userData  = await axios.get('localhost:5000/');
        } catch (err){
            console.log(err);
        }
        return {
            initialData: [1,2,3,4],
            userData
        }
    
    }
    
    render() {
    let overview = (<Spinner></Spinner>)
        console.log(this.context );
              return(
                <div> 
                    <button type="button" onClick={this.props.onAuthStart}>Auth</button>
                    {overview} 
                </div>
          )
    }


}
const mapStateToProps = ( state ) => {
return {
    authenticated: state.authenticated
    }
}

const mappDispatchToProps = ( dispatch ) => {
    return {
        onAuthStart: () => (dispatch) => this.state.auth.authStart()
    }
}

export default connect(mappDispatchToProps, mapStateToProps)(Overview);