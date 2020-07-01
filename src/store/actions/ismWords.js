import {getWords } from './words-utils'
export const ADD_WORD = 'ADD_WORD'
export const INIT_CANEVA = 'INIT_CANEVA'
export const SELECT_WORD = 'SELECT_WORD'
export const FETCH_WORDS = 'FETCH_WORDS'
export const VERIF_CANEVA = 'VERIF_CANEVA'


export const addWord = (word) => {
    return {
        type: ADD_WORD,
        payload: word
    }
}

export const fetchWords = () => {
    const words = getWords()
    console.log({words})
    return {
        type: FETCH_WORDS,
        payload: words
    }
}

export const initCaneva = (words) => {
    return {
        type: INIT_CANEVA,
        payload: words
    }
}
export const selectWord = (id) => {
    return {
        type: SELECT_WORD,
        payload: id
    }
}
export const verifCaneva = (caneva) => {
    return {
        type: VERIF_CANEVA,
        payload: caneva
    }
}