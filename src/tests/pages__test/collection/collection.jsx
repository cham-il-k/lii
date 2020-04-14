import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectCollection, selectShopCollections, selectShopProducts } from '../../store/selectors/shop';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const CollectionPage = ({ collection ,match, history }) => {
   const {title, products} = collection  
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
  collection: selectShopProducts(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
