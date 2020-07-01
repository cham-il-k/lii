import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectProgramTablets } from '../../store/selectors/ismProgram';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const IsmProfilProgramsPage = (props) => {
  console.log({props})   
  const {program, match} = props
  //const { title, tablets} = program
  return (
   <div>Voila BismiALLAH</div>
   
    );
};


const mapStateToProps = (state, ownProps) => createStructuredSelector({
  program: selectProgramTablets(ownProps.match.params.programId)
});

const IsmProfilProgramsContain =  compose(
  connect(mapStateToProps),
  withRouter,
)(IsmProfilProgramsPage)

export default IsmProfilProgramsContain;
