import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './SignIn.scss';

export class SignIn extends Component {
 state = {
  email: '',
  password: ''
 }

 handleSubmit = async e => {
  e.preventDefault();

  const {email,password} = this.state;
  try {
    await auth.signInWithEmailAndPassword(email,password);

    this.setState({
      email: '',
      password: ''
     })
  } catch(error) {
    console.log(error);
  }
 }

 handleChange = e => {
  const {value,name} = e.target;

  this.setState({[name] : value})
 }

 render() {
  return (
   <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={this.handleSubmit}>
     <FormInput handleChange={this.handleChange} label="email" name="email" type="email" value={this.state.email} required/>
     <FormInput handleChange={this.handleChange} label="password" name="password" type="password" value={this.state.password} required/>

     <div className="buttons">
       <CustomButton type="submit">Sign In</CustomButton>
       <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
     </div>
    </form>
   </div>
  )
 }
}

export default SignIn
