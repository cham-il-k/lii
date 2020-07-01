import {all, put , call, takeLatest} from 'redux-saga/effects'
import {firestore} from '../../util/auth.firebase'
import { fetchProgramSuccess, fetchProgramFail} from '../actions/ismProgram'
import { 
    FETCH_PROGRAM_START 
} from './../actions/ismProgram'

export function* fetchProgramStart() {
    try {
        const program = ['ismai', 'horouf', '3ilm']
        
        yield put(fetchProgramSuccess(program))
    }catch(error) {
        yield put(fetchProgramFail(error))
    }
}

export function* onFetchProgramStart( ){
    yield takeLatest(FETCH_PROGRAM_START, fetchProgramStart)
}

export default function* programSagas() {
    yield all([call(onFetchProgramStart) ])
} 
