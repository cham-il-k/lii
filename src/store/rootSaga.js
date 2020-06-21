import { all, call  } from 'redux-saga/effects'
import { fetchCollectionsStart} from './sagas/ismai'
import { profilSagas } from './sagas/profil'

export default function* rootSaga() {

    yield all([
        call(fetchCollectionsStart),
        call(profilSagas)
    ])

}