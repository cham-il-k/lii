export const ADD_PROGRAM = 'ADD_PROGRAM';
export const VALID_PROGRAM = 'VALID_PROGRAM';
export const FETCH_PROGRAM = 'FETCH_PROGRAM';
export const FETCH_PROGRAM_START = 'FETCH_PROGRAM_START';
export const FETCH_PROGRAM_SUCCESS = 'FETCH_PROGRAM_SUCCESS';
export const FETCH_PROGRAM_FAIL = 'FETCH_PROGRAM_FAIL';

export const INIT_PROGRAM = 'INIT_PROGRAM'; 
export const SELECT_PROGRAM = 'SELECT_PROGRAM';
export const ADD_TABLET_TO_PROGRAM = 'ADD_TABLET_TO_PROGRAM';
export const CLEAR_TABLET = 'CLEAR_TABLET';
export const REMOVE_TABLET_FROM_PROGRAM = 'REMOVE_TABLET_FROM_PROGRAM';
export const VALID_STEP_PROGRAM = 'VALID_STEP_PROGRAM';
export const TOGGLE_TABLET_HIDDEN = 'TOGGLE_TABLET_HIDDEN';

export const addProgram = (program ) => {
    return {
        type:ADD_PROGRAM,
        payload :program
    }
}
export const validProgram = (program) => {
    return {
        type:VALID_PROGRAM,
        payload: program
    }
}
export const initProgram = (program ) => {
    return {
        type:INIT_PROGRAM,
        payload : program
 
    }
}

export const fetchProgramStart = ( ) => {
   
    return {
        type:FETCH_PROGRAM_START,
        }
}
export const fetchProgramSuccess = (programs ) => {
    return {
        type:FETCH_PROGRAM_SUCCESS,
        payload : programs
 }
}
export const fetchProgramFail = ( error) => {
    return {
        type:INIT_PROGRAM,
        payload : error
 
    }
}



export const selectProgram = (id ) => {
    return {
        type:SELECT_PROGRAM,
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
        type: VALID_STEP_PROGRAM,
        payload:tablet
    }
}