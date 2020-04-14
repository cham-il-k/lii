import React, { Component} from 'react';
import { connect } from 'react-redux';
import Category from './Category'
import {SearchBox} from '../../components/SearchBox/SearchBox'
import './category-listy.scss';      

class CategoryList extends Component   {
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
                        {
                           this.props.gifts.map((gift, index) => (
                                <Category key={index} gift={ gift} />
                            ))
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);