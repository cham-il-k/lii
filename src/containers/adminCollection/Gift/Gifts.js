import React, { Component} from 'react';
import { connect } from 'react-redux';
import Gift from './Gift'
//import { searchChange } from './../../store/actions/gift/searchChange'
import {SearchBox} from '../../../components/SearchBox/SearchBox'
import './gifts.scss';      

class Gifts extends Component   {
       state = {
        loading: false,
        error: ""
     }
        
    render() {
        console.log(JSON.stringify(this.props))
        return(
                <div className="doc">
                <h2>Gifts/ Congrat</h2>  
                <SearchBox  placeholder='search a gift' onSearchChange={ this.props.searchChange}/>
                <div className="gifts-container">
                {this.props.gifts.map((gift, index) => (
                    <Gift key={index} gift={ gift} />
                )
                    )
                    }
                    </div>

                </div>
            );
    }; 
    }

const mapStateToProps = ( state ) => {
    return {
        gifts: state.gift.gifts
    }
}
const mapDispatchToProps = ( dispatch ) => {
return {
    searchChange: (e) => dispatch({
        type: 'SEARCH_GIFT', 
        payload: e.target.value
    })
    }}

    
export default connect(mapStateToProps, mapDispatchToProps)(Gifts);