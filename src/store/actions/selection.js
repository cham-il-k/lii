export const ADD_SECTION = 'ADD_SECTION'
export const INIT_SELECTION = 'INIT_SELECTION'
export const INIT_SECTION = 'INIT_SECTION'
export const FETCH_SECTION = 'FETCH_SECTION'

export const addSection = (section) => {
    return {
        type: ADD_SECTION,
        payload: section

    }
}

export const initSelection = (selection) => {
    return {
        type: INIT_SELECTION,
        payload: selection
    }
}

export const initSection = (section) => {
    return {
        type: INIT_SELECTION,
        payload: section
    }
}
export const fetchSection = (section) => {
    return {
        type: FETCH_SECTION,
        payload: section
    }
}