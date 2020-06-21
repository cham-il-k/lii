/**
 * 23bmgPxAML4e
 */
import React from 'react';
import { setCurrentProfil, selectCurrentProfil } from './../../store/actions/profil'
import { connect } from 'react-redux'
import IsmFormInput from '../IsmFormInput/IsmFormInput';
import IsmCustomButton from '../IsmCustomButton/IsmCustomButton';
import { googleSigninStart, signinStart} from '../../store/actions/profil';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styled';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = async event => {
    const { signInStart } = this.props
    event.preventDefault();
    const { email, password } = this.state;
    signInStart(email, password)  
  }
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const {googleSigninStart, signInStart} = this.props
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <IsmFormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <IsmFormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <IsmCustomButton type='submit'> Sign in </IsmCustomButton>
            <IsmCustomButton type='button' onClick={googleSigninStart} isGoogleSignIn>
              Google SignIn 
            </IsmCustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
const mapStateToProps = (state) => ({ profil: selectCurrentProfil })

const mapDispatchToProps = (dispatch) => ({ 
  setCurrentProfil : (profil) => dispatch(setCurrentProfil),
  googleSigninStart : () => dispatch(googleSigninStart()),
  signInStart : (email, password) => dispatch(signinStart({   email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
