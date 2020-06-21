import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom'
import CollectionPreview from '../Collection-Preview/Collection-Preview';

import { selectProducts, selectCollections } from '../../store/selectors/words';

import { CollectionsOverviewContainer } from './progression-overview.styled';

const CollectionsOverview = ({ collections }) => { 
  return(
      <CollectionsOverviewContainer>
        {
        collections.map(( collection ) => {
          const  {id, ...otherCollectionProps} = collection;
         return     <CollectionPreview key={id} {...otherCollectionProps} />
        }
        )
      } 
      </CollectionsOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default withRouter(connect(mapStateToProps)(CollectionsOverview));
