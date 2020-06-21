import { INITIAL_SHOP } from './shopData'
import { FETCH_ASMA1_START, FETCH_ASMA1_SUCCESS, FETCH_ASMA1_FAIL, FETCH_SOURA_BYID,FETCH_SOURA_SUCCESS} from '../actions/ismai'
const initialState = {
        souras: {},
        asma1:[],
        grills:[],
        loading: false,
        error: null
    };
    

const ismaiReducer = ( state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_ASMA1_SUCCESS:
            return { 
                ...state,
                grills:action.payload,
                loading:false
                };
        
        case FETCH_ASMA1_FAIL:
            return { 
                ...state,
                grills:{},
            loading:false,
            error:action.payload                
            };      default:
            return state ;       
    }
}

export default ismaiReducer; 
