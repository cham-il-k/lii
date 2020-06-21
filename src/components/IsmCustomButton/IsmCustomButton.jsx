import React from 'react';

import { CustomButtonContainer, CustomLinkContainer } from './ismCustomButton.styled';

const IsmCustomButton = ({ children, ...props }) => {
  if(props.link) {
    return <CustomLinkContainer {...props}>{children}</CustomLinkContainer>
  }
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>

}

export default IsmCustomButton;
