import { all, call  } from 'redux-saga/effects'
import programSagas from './sagas/program'
import { profilSagas } from './sagas/profil'

export default function* rootSaga() {

    yield all([
        call(profilSagas),
        call(programSagas)
    ])
}