import React from 'react';
import { connect } from 'react-redux'
import IsmFormInput from '../IsmFormInput/IsmFormInput';
import IsmCustomButton from '../IsmCustomButton/IsmCustomButton';
import { Link } from 'react-router-dom'
import { auth, createUserProfilDocument } from '../../util/auth.firebase';
import IsmRadioButton from './../IsmRadioButton/IsmRadioButton'
import { setCurrentProfil, selectCurrentProfil } from '../../store/actions/profil'
import { FormContent, SignUpContainer,SignUpContent, SignUpTitle, ButtonsBarContainer, Message, LoginFooter } from './ismSignUp.styled';

class IsmSignUp extends React.Component {
  state = {
    login: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async event => {
    const {setCurrentProfil} = this.props
    event.preventDefault();
    const { login, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    console.log(login, email)
    try {
      const docRef = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userRef = await createUserProfilDocument(docRef.user, { login });
      if (userRef) {
        userRef.onSnapshot(snapshot => {
          setCurrentProfil({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
       } else 
       {
        console.log(`cant set setCurrentProfil ${login}, ${email}`)
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { login, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpContent>
          <SignUpTitle>
            Signup and Progress
          </SignUpTitle>
          <FormContent>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <IsmFormInput
            type='text'
            name='login'
            value={login}
            onChange={this.handleChange}
            label='Login'
            required
          />
          <IsmFormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <IsmFormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <IsmFormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <ButtonsBarContainer>
            <IsmCustomButton type='submit'>SIGN UP</IsmCustomButton>
            <IsmRadioButton />
        </ButtonsBarContainer>
        </form>
        </FormContent>
        </SignUpContent>
        
        <LoginFooter>
          Vous vous connecter cochez la case en dessous
        </LoginFooter>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profil: selectCurrentProfil
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentProfil: (profil) => dispatch(setCurrentProfil)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IsmSignUp);
