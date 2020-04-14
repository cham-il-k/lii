import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentProfil} from './store/actions/profil'
import {selectCurrentProfil} from './store/selectors/profil'
import {selectCollections} from './store/selectors/selection'

import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer' 
import Main from './pages/main/main'
import {auth, createUserProfilDocument, addCollectionAndDocuments} from './util/auth.firebase'
import {AppContainer} from './App-styled'

class App extends Component {

unsubscribeFromAuth=null

state = {
  loading: false,
  error:'',
}

render() {
  return (
    <AppContainer>

      <Header />
        <Main />
       <Footer/> 
    </AppContainer>
  );
  }
} 

const mapStateToProps = (state) => {
  return {
    currentProfil: selectCurrentProfil(state),
    collections: selectCollections(state)
  }
}  

export default withRouter(connect(mapStateToProps)(App));
