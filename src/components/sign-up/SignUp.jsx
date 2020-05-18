import React, { Component } from 'react'
import './SignUp.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

export class SignUp extends Component {
 state = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
 }

 handleSubmit = async e => {
  e.preventDefault();
  const {displayName, email, password, confirmPassword} = this.state;
  if(password !== confirmPassword) {
   alert(`password don't match`);
   return;
  }

  try {
   const {user} = await auth.createUserWithEmailAndPassword(email, password);
   await createUserProfileDocument(user, {displayName});

   this.setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
   })
  } catch (error) {
    console.log(error);
  }
 }

 handleChange = e => {
  const {name,value} = e.target;
  this.setState({[name]: value})
 }

 render() {
  const {displayName, email, password, confirmPassword} = this.state;
  return (
   <div className="sign-up">
    <h2 className="title">I do not have an acount</h2>
    <span>Sing up with your email and passord</span>
    <form className="sing-up-form" onSubmit={this.handleSubmit}>
     <FormInput 
      type="text"
      name="displayName"
      value={displayName}
      onChange={this.handleChange}
      label="Display name"
      required
     />
     <FormInput 
      type="email"
      name="email"
      value={email}
      onChange={this.handleChange}
      label="Email"
      required
     />
     <FormInput 
      type="password"
      name="password"
      value={password}
      onChange={this.handleChange}
      label="Password"
      required
     />
     <FormInput 
      type="password"
      name="confirmPassword"
      value={confirmPassword}
      onChange={this.handleChange}
      label="Confirm Password"
      required
     />
     <CustomButton type="submit">SING UP</CustomButton>
    </form>
   </div>
  )
 }
}

export default SignUp
