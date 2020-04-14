import React from 'react';
import { connect } from 'react-redux'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import { Link } from 'react-router-dom'
import { auth, createUserProfilDocument } from './../../util/auth.firebase';
import { setCurrentProfil, selectCurrentProfil } from './../../store/actions/profil'
import { SignUpContainer, SignUpTitle, ButtonsBarContainer, Message } from './SignUp-styled';

class SignUp extends React.Component {
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
        <SignUpTitle>Don t have an account</SignUpTitle>
        <span>Sign up with email and password </span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='login'
            value={login}
            onChange={this.handleChange}
            label='Login'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>SIGN UP</CustomButton>
            <Message>
              already user ?<Link link='link' to='/signin' > SIGNIN</Link>

            </Message>

          </ButtonsBarContainer>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
