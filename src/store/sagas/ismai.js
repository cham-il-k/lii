import { takeEvery, take, put , call, takeLatest } from 'redux-saga/effects'
import {firestore} from '../../util/auth.firebase'
import { fetchAsma1Success, fetchAsma1Fail} from '../actions/ismai'
import { 
    FETCH_ASMA1_SUCCESS,
    FETCH_ASMA1_FAIL,
    FETCH_ASMA1_START,
    LOAD_GRILLS_START,
    LOAD_GRILLS_SUCCESS,
    LOAD_GRILLS_FAIL,
    FETCH_SOURA_BYID,
    FETCH_SOURA_SUCCESS,
    FETCH_SOURA_FAIL
} from './../actions/ismai'

export function* fetchAsma1sStart() {
    yield takeLatest(FETCH_ASMA1_START, fetchCollectionsAsync)
}

export function* fetchCollectionsAsync( ) {
    try {
        const collections = []
        const collectionRef =  firestore.collection('selection').then(collectionRef => (collectionRef.get())).then(snapShot =>
                {
                    snapShot.map(collection => {
                        collections.concat(collection.data())
                    })
                }
            )
        yield put(fetchCollectionSuccess(collections))    
    }
    catch (error) {
      yield put(fetchCollectionsFail(error.message))  
     }
}

export function* validProduct( product ){
    yield take(VALID_PRODUCT)
}
export function* payProduct( id ){
yield take( PAY_PRODUCT)
}
export function* shipProduct(checkout){
 yield take(SHIP_PRODUCT)
}