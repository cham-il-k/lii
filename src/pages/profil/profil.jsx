import React from 'react';
import { Route } from 'react-router-dom';

import Profil from './../../components/Profil/Profil';
import CollectionPage from './profil.collection';

const ProfilPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={Profil} />
     <Route path={`${match.path}/:profilId`} component={CollectionPage} />
   </div>
);

export default ProfilPage;
