import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './ismFormInput.styled';

const IsmFormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    <FormInputContainer onChange={handleChange} {...props} />
   
  </GroupContainer>
);

export default IsmFormInput;
