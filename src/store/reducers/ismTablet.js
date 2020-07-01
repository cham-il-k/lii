import { 
  ADD_TABLET,
  VALID_TABLET,  FETCH_TABLETS_START,
  FETCH_TABLETS_SUCCESS,
  FETCH_TABLETS_FAIL,
  INIT_TABLET,
  SELECT_TABLET,
  CLEAR_TABLET,
  REMOVE_TABLET_FROM_PROGRAM,  VALID_STEP_TABLET, TOGGLE_TABLET_HIDDEN
   } from '../actions/ismTablet'
import { removeTabletFromProgram, addTabletToProgram} from './program.utils';

const INITIAL_STATE = {
    title:'title',    
    hidden: true,
    contents: [],
    error:false
  };

const ismTabletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TABLET_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    
    case FETCH_TABLETS_SUCCESS:
      return {
        ...state,
        contents: action.payload
      };
    case FETCH_TABLETS_FAIL:
    return {
      ...state,
      error: action.payload
    };
    case ADD_TABLET:
      return {
          ...state,
           contents: addTabletToProgram(state.talets, action.payload)
      };
    case REMOVE_TABLET_FROM_PROGRAM:
      return {
        ...state,
        contents: removeTabletFromProgram(state.program, action.payload)}
      ;
    case CLEAR_TABLET:
      return {
          ...state, tablets: state.tablets.filter(
          contents => []
        )
      };
    default:
      return state;
  }
};

export default ismTabletReducer;
