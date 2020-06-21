import { INITIAL_SOURA, INITIAL_WORDS } from './wordsData'

import fs from 'fs'
import path from 'path'
import { ADD_WORD,VERIF_CANEVA,SELECT_WORD,INIT_CANEVA} from '../actions/words'
const initialState = {
        soura: INITIAL_SOURA,
        caneva: {},
        selected:[],
        canevasCorrect:{},
        verif:[],
        error: '',
        loading: false
    };
    
const wordsReducer = ( state = initialState , action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state, 
                caneva: {...state.cannevas, ...action.payload }
            };
       case SELECT_WORD:
           return {
               ...state,
               selected:[...state.selected, ...action.payload]
           }
        case INIT_CANEVA:
            return {
                ...state,
                 canevasCorrect:  action.payload
            };
        case VERIF_CANEVA:
            return { ...state, 
                verif:[...state.verif,action.payload] 
            };
      
        default:
            return state ;       
    
    }
}

export default wordsReducer; 
