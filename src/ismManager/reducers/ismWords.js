import { INITIAL_WORDS } from './wordsData'
import { ADD_WORD,VERIF_CANEVA,SELECT_WORD,INIT_CANEVA, FETCH_WORDS} from '../actions/ismWords'
const initialState = {
        words: '',
        caneva: {},
        selected:[],
        canevasCorrect:{},
        verif:[],
        error: '',
        loading: false
    };
const ismWordsReducer = ( state = initialState , action) => {
    switch (action.type) {
        case FETCH_WORDS: {
            console.log(action.payload)
            return{
                ...state,
                words:action.payload
            }
        }
        case ADD_WORD:
            return {
                ...state, 
                caneva: {...state.canneva, ...action.payload }
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

export default ismWordsReducer; 
