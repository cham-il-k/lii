import {getWords } from './words-utils'
export const ADD_SOURA = 'ADD_SOURA'
export const INIT_SOURA = 'INIT_SOURA'
export const SELECT_SOURA = 'SELECT_SOURA'
export const FETCH_SOURA = 'FETCH_SOURA'
export const VERIF_SOURA = 'VERIF_SOURA'


export const addWord = (word) => {
    return {
        type: ADD_SOURA,
        payload: word
    }
}

export const fetchWords = () => {
    const words = getWords()
    return {
        type: FETCH_SOURA,
        payload: words
    }
}

export const initCaneva = (words) => {
    return {
        type: INIT_SOURA,
        payload: words
    }
}
export const selectWord = (id) => {
    return {
        type: SELECT_SOURA,
        payload: id
    }
}
export const verifCaneva = (caneva) => {
    return {
        type: VERIF_SOURA,
        payload: caneva
    }
}