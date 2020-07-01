import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item-styled';

const IsmMenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  
  const imageUrlrep = `..${imageUrl}`

  return <MenuItemContainer
            size={size}
            onClick={() => { history.push(`${match.path}program/${title}`)
            }}
          >
            <ContentContainer >
              <ContentTitle>{title.toUpperCase()}</ContentTitle>
              <ContentSubtitle > program </ContentSubtitle>
            </ContentContainer>
          </MenuItemContainer>
};

export default withRouter(IsmMenuItem);
