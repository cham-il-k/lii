import React, {Component, Fragment } from 'react';
import Program from './Program';
import { Route, Redirect} from 'react-router-dom';
import {connect } from 'react-redux' 
import './programs.scss'
class Programs extends Component {
    state = {
        error: '',
        loading: false
        }
    
render() {
        let { programs } = this.props; 
        const tab_programs = programs.map((program, index) =>
          <Program program={program} key={index}  />        
        )
        return (
        
        <section className="programs" >
            <h1>Programs </h1>    
            <div className="progs">
            {tab_programs}

            </div>
        </section>
        
        );
    }
};


const mapStateToProps = ( state ) => {
    return {
        programs : state.program.programs,
    }
}
const mapDispatchToProps = ( dispatch) => {
    return {
        liismo: () => dispatch()
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Programs);