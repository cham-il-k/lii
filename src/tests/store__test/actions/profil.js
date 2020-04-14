/**
 * ACTION TYPE
 */
export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'

export const GOOGLE_SIGNIN_START = 'SIGNIN_START';
export const GOOGLE_SIGNIN_SUCCESS = 'GOOGLE_SIGNIN_SUCCESS'
export const GOOGLE_SIGNIN_FAIL = 'GOOGLE_SIGNIN_FAIL'

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'


export const SET_CURRENT_PROFIL = 'SET_CURRENT_PROFIL'
export const SELECT_CURRENT_PROFIL = 'SELECT_CURRENT_PROFIL'

export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const GET_COLLECTION = 'GET_COLLECTION';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const LOGOUT = 'LOGOUT'

export const signinStart = (emailAndPassword) => ({
    type: SIGNIN_START,
    payload: emailAndPassword
})

export const signinSuccess = (profil) => ({
    type: SIGNIN_SUCCESS,
    payload:profil
})

export const signinFail = (error) => ({
    type: SIGNIN_FAIL,
    payload: error
    
})

export const googleSigninStart = () => ({
    type: GOOGLE_SIGNIN_START,
    
})


export const signupStart = (profil) => ({
        type: SIGNUP_START
    })
    

export const setAuthToken = token => {
if (token) {
    localStorage.setItem('jwtToken', `Bearer ${token}`)
} else {
    localStorage.removeItem('jwtToken')
}
}

export const setCurrentProfil = (profil) => {
    return {
        type: SET_CURRENT_PROFIL,
        payload: profil
    }
}

export const selectCurrentProfil = (id) => {
    return {
        type: SELECT_CURRENT_PROFIL,
        payload: id
    }
}
export const logOut = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}
/* 

export const getCollection = (profil) => {
    return {
        type: GET_COLLECTION,
        payload: profil
    }
}

export const addToCollection = (product) => {
    return {
        type: ADD_TO_COLLECTION,
        payload: product
    }
}
export const removeFromCollection = (product) => {
    return {
        type: GET_COLLECTION,
        payload: product
    }
} */