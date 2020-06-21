export const FETCH_ASMA1_SUCCESS = 'FETCH_ASMA1_SUCCESS'
export const FETCH_ASMA1_FAIL = 'FETCH_ASMA1_FAIL'
export const FETCH_ASMA1_START = 'FETCH_ASMA1_START'

export const LOAD_GRILLS_START = 'LOAD_GRILLS_START'
export const LOAD_GRILLS_SUCCESS = 'LOAD_GRILLS_SUCCESS'
export const LOAD_GRILLS_FAIL = 'LOAD_GRILLS_FAIL'

export const FETCH_SOURA_BYID = 'FETCH_SOURA_BYID'
export const FETCH_SOURA_SUCCESS = 'FETCH_SOURA_SUCCESS'
export const FETCH_SOURA_FAIL = 'FETCH_SOURA_FAIL'


export const fetchCollectionsStart = () => {
    return {
        type: FETCH_ASMA1_START,

    }
}
export const fetchAsma1Success = (collections) => {
    return {
        type: FETCH_ASMA1_SUCCESS,
        payload: collections
    }
}
export const fetchAsma1Fail = (error) => {
    return {
        type: FETCH_ASMA1_FAIL,
        payload: error

    }
}
export const loadGrillsStart = () => {
    return {
        type: LOAD_GRILLS_START,
    }
}