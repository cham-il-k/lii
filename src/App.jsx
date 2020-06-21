import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentProfil} from './store/actions/profil'
import {selectCurrentProfil} from './store/selectors/profil'
import {selectCollections} from './store/selectors/words'

import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer' 
import IsmMainPage from './pages/IsmMain/IsmMain'
import {auth, createUserProfilDocument, addCollectionAndDocuments} from './util/auth.firebase'
import {AppContainer} from './app-styled'

class App extends Component {

unsubscribeFromAuth=null

state = {
  loading: false,
  error:'',
}

render() {
  return (
    <AppContainer>
        <IsmMainPage />
    </AppContainer>
  );
  }
} 

const mapStateToProps = (state) => {
  return {
    /*currentProfil: selectCurrentProfil(state),
    collections: selectCollections(state)
 */  }
}  

export default withRouter(connect(mapStateToProps)(App));
