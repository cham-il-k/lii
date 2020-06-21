import React from 'react';

import { IsmCustomButtonContainer } from './CustomInput.styled';

const IsmCustomButton = ({ children, ...props }) => (
  <IsmCustomButtonContainer {...props}>{children}</IsmCustomButtonContainer>
);

export default IsmCustomButton;
