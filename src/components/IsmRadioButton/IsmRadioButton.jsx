import React from 'react';

import { RadioParent, RadioLabel, CustomLinkContainer, RadioContainer } from './ismRadioButton.styled';

const IsmRadioButton = ({ children, ...props }) => {
  return(
    <RadioParent>
        <RadioContainer>
          <RadioLabel>
            <input name="user" type="radio" value="fami" checked={true} />
            Famille
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="user" value="org" />
            org
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioLabel>
            <input type="radio" name="user" value="user" />
            user
          </RadioLabel>
        </RadioContainer>
        </RadioParent>
        ) 
  
}

export default IsmRadioButton;
