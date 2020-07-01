import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faComment, faUserFriends, faSearch  } from '@fortawesome/free-solid-svg-icons'
import { selectIsmaiAsma1} from '../../store/selectors/ismai'
import Footer from '../../components/Footer/Footer'
import {
  IsmaiTitle,
  IsmaiPageContainer,
  IsmaiLeftContainer,
  IsmaiRightContainer,
  IsmaiFormContainer,
  IsmaiFormInput,
  IsmaiJoin,
  Ismaibutton,
  LabelDiv,
  IsmaiLink
  
} from './ismai.styled';

const IsmaiPage = ({match, history }) => {
  // const {text, ayat, soura} = asma1  
  return (
    
    <>
     <IsmaiTitle>Ismai</IsmaiTitle>
     <IsmaiPageContainer>
     <IsmaiLeftContainer>
        <div className="search">
         <FontAwesomeIcon icon={faSearch} />
       </div>
       <div className="comment">
         <FontAwesomeIcon icon={faComment} />
       </div>
       <div className="frinds">
         <FontAwesomeIcon icon={faUserFriends} />
       </div>
     </IsmaiLeftContainer>
     <IsmaiRightContainer>
        <form>
        <IsmaiFormContainer>
            <IsmaiFormInput type="text" placeholder="login or email"/>   
            <IsmaiFormInput type="password" placeholder="password"/>   
            <Ismaibutton type="button"> Login</Ismaibutton> 
            <LabelDiv>forgot password ?</LabelDiv>
        </IsmaiFormContainer>
        </form> 
      <IsmaiJoin>
        <span><FontAwesomeIcon icon={faRecycle} /></span>
       <h2> Join To Progress </h2>
        <IsmaiLink to="/signup">Sign UP</IsmaiLink>
      </IsmaiJoin>
     </IsmaiRightContainer>
     <Footer/>
   </IsmaiPageContainer>
     </>
  )
};

const mapStateToProps = (state, ownProps) => ({
// asma1: selectIsmaiAsma1(ownProps.match.params.souraId)(state)
});

export default IsmaiPage;
