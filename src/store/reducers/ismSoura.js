import { INITIAL_SOURA, INITIAL_WORDS } from './wordsData'

import fs from 'fs'
import path from 'path'
import { ADD_SOURA,SELECT_SOURA, VERIF_SOURA, INIT_SOURA} from '../actions/ismSoura'
const initialState = {
        soura: INITIAL_SOURA,
        caneva: {},
        selected:[],
        canevasCorrect:{},
        verif:[],
        error: '',
        loading: false
    };
    
const ismSouraReducer = ( state = initialState , action) => {
    switch (action.type) {
        case ADD_SOURA:
            return {
                ...state, 
                caneva: {...state.cannevas, ...action.payload }
            };
       case SELECT_SOURA:
           return {
               ...state,
               selected:[...state.selected, ...action.payload]
           }
        case INIT_SOURA:
            return {
                ...state,
                 canevasCorrect:  action.payload
            };
        case VERIF_SOURA:
            return { ...state, 
                verif:[...state.verif,action.payload] 
            };
      
        default:
            return state ;       
    
    }
}

export default ismSouraReducer; 
