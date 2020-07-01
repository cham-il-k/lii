import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom'
import IsmMainPage from './pages/ismMain/ismMain'
import {AppContainer} from './app-styled'
import IsmProgramCanva from './components/IsmProgramCanva/IsmProgramCanva'

class App extends Component {

render() {
  return (
    <AppContainer>
      <IsmMainPage /> 
    </AppContainer>
  );
  }
} 


export default withRouter(App);
