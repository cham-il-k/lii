import {combineReducers } from 'redux'
import profilReducer from './profil'
import cartReducer from './cart'
import selectionReducer from './selection'
import shopReducer from './shop'
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
        selection:selectionReducer,
        shop:shopReducer,
         
    }

)
export default persistReducer(persistConfig, rootReducer)