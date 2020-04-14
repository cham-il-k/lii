import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selecttProfilCollection } from '../../store/selectors/profil';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const profilCollectonPage = ({ collection ,match, history }) => {
     const { title, products} =collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {products.map(product => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selecttProfilCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(profilCollectonPage);
