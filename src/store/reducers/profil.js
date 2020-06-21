import {
    SIGNIN_START, SIGNIN_FAIL, SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_START,GOOGLE_SIGNIN_FAIL,GOOGLE_SIGNIN_SUCCESS,
    SIGNUP_START,SIGNUP_FAIL,SIGNUP_SUCCESS,
    
    LOGOUT,
    SET_CURRENT_PROFIL,
    ADD_TO_COLLECTION,
    GET_COLLECTION,
    REMOVE_FROM_COLLECTION,
  
} from '../actions/profil'

const initialState = {

    currentProfil: '',
    collection: '',
    loading: false,
    error:null
}

const profilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
        case GOOGLE_SIGNIN_SUCCESS:    
            return {
            ...state,
            loading: false,
            error:null,
            currentProfil: action.payload
            };

        case SIGNIN_FAIL:
        case GOOGLE_SIGNIN_FAIL:    
            return {
            ...state,
            loading: false,
            error: action.payload
            };
    
            case SET_CURRENT_PROFIL:
            return {
                ...state,
                loading: false,
                currentProfil: action.payload,
            };
        case GET_COLLECTION:
            return {
                ...state,
            };
        case ADD_TO_COLLECTION:
            return {
                ...state,
                collection: [... action.payload]
            };

        case REMOVE_FROM_COLLECTION:
            return {
                ...state,
                collection: [...action.payload]
            };

        case LOGOUT:
            return {
                loading: false,
                currentProfil: null
            };
        default:
            return state;
    }
}

export default profilReducer;