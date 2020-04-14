import React from 'react'   
import { createStore , applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { persistStore} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './rootSaga'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

React.lazy(() => import('./selectors/shop'));
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV==='development') {
       middleware.push(logger)
}

export const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)

export const persistStor = persistStore(store)
/**@todo*/
/* 
if ( process.env.NODE_ENV === 'development' )  {

store.subscribe(() => 
              {
        console.log(`On subscribe State is :: --> ${JSON.stringify(store.getState())}`)
              }
       )
} */