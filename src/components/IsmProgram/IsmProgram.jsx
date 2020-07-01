import React, { useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { SelectionMenuContainer } from './ismProgram.styled';
import DialogInterface from '../IsmDialogInterface/IsmDialogInterface'
//import FormInput from '../__FormInput/FormInput';
import { ProgramsMenuContainer} from './ismProgram.styled'

const IsmProgram = ({match}) => {
useEffect(() => {
    
  })

  return (
    <ProgramsMenuContainer>
       program
       <Link to={`${match.path}/canvas`}> canvas </Link>
    </ProgramsMenuContainer>
  )
}


export default withRouter(IsmProgram);
