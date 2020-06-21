import {combineReducers } from 'redux'
import profilReducer from './profil'
import cartReducer from './cart'
import wordsReducer from './words'
import souraReducer from './soura'
import ismaiReducer from './ismai'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
export const history = createBrowserHistory()
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','profil','shop','selection'] 
}
const rootReducer = combineReducers(
    {   
        router: connectRouter(history),
        profil:profilReducer,
        cart:cartReducer,
        words:wordsReducer,
        soura:souraReducer,
        ismai:ismaiReducer,
         
    }

)
export default persistReducer(persistConfig, rootReducer)