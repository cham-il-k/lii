import {combineReducers } from 'redux'
import ismProfilReducer from './ismProfil'
import ismProgramReducer from './ismProgram'
import ismWordsReducer from './ismWords'
import ismSouraReducer from './ismSoura'
import ismaiReducer from './ismai'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
import ismTabletReducer from './ismTablet'
export const history = createBrowserHistory()
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['words','profil', 'program', 'soura', 'ismai'] 
}
const rootReducer = combineReducers(
    {   
        profil:ismProfilReducer,
        program:ismProgramReducer,
        words:ismWordsReducer,
        soura:ismSouraReducer,
        tablet:ismTabletReducer,    
        ismai:ismaiReducer,
         
    }

)
export default persistReducer(persistConfig, rootReducer)