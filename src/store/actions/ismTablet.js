import { ADD_TABLET_TO_PROGRAM } from "./ismProgram";

export const ADD_TABLET = 'ADD_TABLET';
export const VALID_TABLET = 'VALID_TABLET';
export const FETCH_TABLET = 'FETCH_TABLET';
export const FETCH_TABLETS_START = 'FETCH_TABLETS_START';
export const FETCH_TABLETS_SUCCESS = 'FETCH_TABLETS_SUCCESS';
export const FETCH_TABLETS_FAIL = 'FETCH_TABLETS_FAIL';

export const INIT_TABLET = 'INIT_TABLET'; 
export const SELECT_TABLET = 'SELECT_TABLET';
export const CLEAR_TABLET = 'CLEAR_TABLET';
export const REMOVE_TABLET_FROM_PROGRAM = 'REMOVE_TABLET_FROM_PROGRAM';
export const VALID_STEP_TABLET = 'VALID_STEP_TABLET';
export const TOGGLE_TABLET_HIDDEN = 'TOGGLE_TABLET_HIDDEN';

export const addTablet = (tablet ) => {
    return {
        type:ADD_TABLET,
        payload :tablet
    }
}
export const validTablet = (tablet) => {
    return {
        type:VALID_TABLET,
        payload: tablet
    }
}
export const initTablet = (tablet ) => {
    return {
        type:INIT_TABLET,
        payload : tablet
    }
}

export const fetchTabletsStart = ( ) => {
    return {
        type:FETCH_TABLETS_START,
        }
}
export const fetchTabletsSuccess = (tablets ) => {
    return {
        type:FETCH_TABLETS_SUCCESS,
        payload : tablets
 }
}
export const fetchTabletsFail = ( error) => {
    return {
        type:FETCH_TABLETS_FAIL,
        payload : error
 }
}
export const selectTablet = ( id ) => {
    return {
        type:SELECT_TABLET,
        payload :  id
        }
}

export const addTabletToProgram = ( tablet) => {
    return { type:ADD_TABLET_TO_PROGRAM,
        payload: tablet
    }
}
export const removeTabletFromProgram = (tablet) => {
    return {
        type: REMOVE_TABLET_FROM_PROGRAM,
        payload: tablet
    }
}
export const validStepProgram = ( tablet ) => {
    return {
        type: VALID_STEP_TABLET,
        payload:tablet
    }
}