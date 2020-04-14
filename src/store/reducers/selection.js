import { INITIAL_SHOP } from './shopData'
import { ADD_SECTION ,INIT_SECTION,FETCH_SECTION, INIT_SELECTION } from './../actions/selection'
const initialState = {
        selection: INITIAL_SHOP,
        sections: Object.keys(INITIAL_SHOP),
        error: '',
        loading: false
    };
    
const selectionReducer = ( state = initialState , action) => {
    switch (action.type) {
        case INIT_SELECTION:
            return {
                ...state, 
                selection: action.payload
            };
       case INIT_SECTION:
           return {
               ...state,
               section:action.payload
           }
        case ADD_SECTION:
            return {
                ...state,
                 selection: [...state.selection, action.payload]
            };
        case FETCH_SECTION:
            return { ...state, 
                section: action.payload.section
            };
      
        default:
            return state ;       
    
    }
}

export default selectionReducer; 
