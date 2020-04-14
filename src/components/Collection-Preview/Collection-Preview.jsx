import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../Collection-Item/Collection-Item';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styled';

const CollectionPreview = ({ title, products, history, match, linkUrl }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}${linkUrl}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {products
        .filter((product, idx) => idx < 4)
        .map(product => (
          <CollectionItem key={product.id} product={product} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
