import React ,{useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { Route } from 'react-router-dom';
import IsmProgram from '../../components/IsmProgram/IsmProgram';
import IsmProgramCanva from './../../components/IsmProgramCanva/IsmProgramCanva'
const IsmPrograms = ({ match  }) => {
useEffect(() => {
  console.log(match)

})

return (
  <>
  <div>ismPrograms</div>
{/*       <Route exact path={`${match.path}`}  component={IsmProgram} />
      <Route exact path={`${match.path}/canvas`} render={
        ()=> (<IsmProgramCanva width={300} height={250} tileSize={10}/>)
      } />
     
 */}       {/* <Route exact path={`${match.path}/:programId`} component={IsmProfilProgramsContain} /> */} 
      </>
   )
};

export default withRouter(IsmPrograms);
