import { TOGGLE_TABLET_HIDDEN, VALID_PROGRAM, 
FETCH_PROGRAM_FAIL ,
FETCH_PROGRAM_SUCCESS,
INIT_PROGRAM ,
SELECT_PROGRAM, 
ADD_TABLET_TO_PROGRAM, 
REMOVE_TABLET_FROM_PROGRAM, 
VALID_STEP_PROGRAM,
CLEAR_TABLET } from '../actions/ismProgram'
import { removeTabletFromProgram, addTabletToProgram} from './program.utils';

const INITIAL_STATE = {
  programs:[],
  programId:'',  
  title:'title',    
  hidden: true,
  tablets: [],
  error:false
  };

const ismProgramReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TABLET_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    
    case FETCH_PROGRAM_SUCCESS:
      return {
        ...state,
        programs: action.payload
      };
    case FETCH_PROGRAM_FAIL:
    return {
      ...state,
      error: action.payload
    };
    case ADD_TABLET_TO_PROGRAM:
      return {
          ...state,
           tablets: addTabletToProgram(state.talets, action.payload)
      };
    case REMOVE_TABLET_FROM_PROGRAM:
      return {
        ...state,
        cartItems: removeTabletFromProgram(state.program, action.payload)}
      ;
    case CLEAR_TABLET:
      return {
          ...state, tablets: state.tablets.filter(
          tablet => tablet.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default ismProgramReducer;
