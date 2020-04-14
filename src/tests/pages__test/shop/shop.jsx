import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/Collections-Overview/Collections-Overview';
import CollectionPage from '../collection/collection';
import React, { Component } from 'react'
import {auth} from './../../util/auth.firebase'
class ShopPage extends Component {
  unsubscribeFromSnapshot = null
componentDidMount(){ 
  this.unsubscribeFromSnapshot = auth.onAuthStateChanged(async userAuth => {
    try {
      if(userAuth) { 
        console.log('Auth est fait')
        //setCurrentProfil(userAuth)
        /*  const userRef = await createUserProfilDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.props.history.push('/profil')
          setCurrentProfil({
            id:snapshot.id,
            ...snapshot.data()
          })
      }) */
    
  }
  console.log('Auth n est pas fait')

    } catch (error) {
      console.log(error)
    }
  }) }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}
export default ShopPage;
