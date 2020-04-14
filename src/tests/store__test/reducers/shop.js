import { INITIAL_SHOP } from './shopData'
//import { ADD_PRODUCT, PAY_PRODUCT, PAY_PRODUCT_FAIL, VALID_PRODUCT ,SHIP_PRODUCT} from '../actions/shop';
import {FETCH_COLLECTIONS_START} from './../sagas/shop'
import {fetchCollectionAsync } from './../sagas/shop'
const initialState = {
        shop: '',
        products:[],
        loading: false
    };
    

const shopReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return { 
                ...state,
                };
        
  /*       case ADD_PRODUCT:
            return { 
                ...state,
                    products: [...state, action.payload]
                };
        
        case PAY_PRODUCT:
            return { 
            PRODUCTs: [...state,action.payload]
        };

        case VALID_PRODUCT:    
        return { 
            PRODUCTs: [...state,action.payload]
        };
        case SHIP_PRODUCT:
            return { 
                PRODUCTs: [...state,action.payload]
            };
   */      default:
            return state ;       
    }
}

export default shopReducer; 
