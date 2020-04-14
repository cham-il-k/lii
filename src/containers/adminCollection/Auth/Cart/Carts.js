import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import './carts.scss'

class Carts extends Component{
    state = {
        loading: false,
        error: ''
        
    }

    render() {
        const mesCarts = this.props.carts.map((cart, index) => {
            return (<li key={index}><Cart
                cart={cart} 
                key={index} /></li>
            )
                })
        return (
        <section className="carts">
            <div id="carts-header"> 
            <h1> TimeLine</h1>
            </div>
                <section id="timeline" >
                    <ul>
                       {mesCarts}
                     </ul>
                </section>
        </section>
        )
    }
} 

const mapStateToProps = ( state) => {
return {
    carts: state.cart.carts
    }
}

const mapStateToDispatch = ( dispatch ) => {
    return {

    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Carts);