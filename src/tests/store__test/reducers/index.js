import {combineReducers } from 'redux'
import profilReducer from './profil'
import cartReducer from './cart'
import selectionReducer from './selection'
import shopReducer from './shop'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] 
}
const rootReducer = combineReducers(
    {
        profil:profilReducer,
        cart:cartReducer,
        selection:selectionReducer,
        shop:shopReducer,
         
    }

)
export default persistReducer(persistConfig, rootReducer)