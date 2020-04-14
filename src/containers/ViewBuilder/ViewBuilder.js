import React, { Component } from 'react';
import BuildTablet from './../components/BuildTablets';
import axiosInstance from '../../util/axios.liil';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as tabletBuilderActions from '../../store/actions';
class ViewBuilder extends Component {
    state = {
             
                 error: false,
                 loading: false,
                 valid: false,

            }
        componentDidMount() {
            console.log('Component did mount in tablet builerz') ;   
          
        }    
        

    render() {
        return(
        <Aux>
                <Tablets carts={this.state.Tablets}/>
                <BuildControls>
                    wordAdded={this.addWordHandler},
                    souraAdded={this.addSouraHandler},
                    disabled= {disableInfo},
                    ordered= {this.validHandler},
                </BuildControls>
        </Aux>   )
    }
}
const mapStateToProps = (state) => {

         return {
             tablets: state.tablets
         };

}
/**
 * 
 * 
export const VALID_CART = 'VALID_CART';
export const VALID_TABLET = 'VALID_TABLET';
export const ADD_TABLET = 'ADD_TABLET';} dispatch 
 */
const mapDispatchToProps = ( dispatch) => {
    return{
        onValidCart: () => dispatch({ type: actionTypes.VALID_CART}),
        onAddTablet: (tableyName) => dispatch({type: actionTypes.ADD_TABBLET, tabletName: tabletName}),
    }

}
export default withErrorHandler(TabletBuilder, axiosInstance);