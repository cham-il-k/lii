import React, {Component} from 'react'
import Tablet from './Tablet';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import './tablets.scss'
class Tablets extends Component {
  state = {
      loading: false,
      error: ''
  }
    
     componentDidMount = async()  => {
    }   
    validateHandler = ( ) => {

    }
    
    render() {
    
      let tabs = [];
       if( this.props.tablets ) {
        tabs = this.props.tablets.map( (tab, index) => (
               <Tablet tab={tab} key={index} />
        ))
    } 
    return (
            <section className="tablets" >
              <h1>Tablets</h1>
               <div className="tabs">
               {tabs}
              </div>
              </section>
            
       )      
        
  }
}

const mapStateToProps = ( state ) => {
    return {
      tablets: state.tablet.tablets
    }
  }
  
  
  const mapDispatchToProps = ( dispatch ) => {
    return {
        getTablets:() => dispatch(),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Tablets);
