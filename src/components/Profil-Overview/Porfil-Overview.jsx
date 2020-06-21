import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom'
import CollectionPreview from '../Collection-Preview/Collection-Preview';

import { selectProducts, selectCollections } from './../../store/selectors/selection';

import { ProfilOverviewContainer } from './profil-overview.styled';

const CollectionsOverview = ({ collections }) => { 
  return(
      <ProfilOverviewContainer>
        {
        collections.map(( collection ) => {
          const  {id, ...otherCollectionProps} = collection;
         return     <CollectionPreview key={id} {...otherCollectionProps} />
        }
        )
      } 
      </ProfilOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default withRouter(connect(mapStateToProps)(CollectionsOverview));
