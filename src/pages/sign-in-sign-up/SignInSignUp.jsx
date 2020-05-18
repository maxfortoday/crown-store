import React from 'react'
import './SignInSignUp.scss'
import SignIn from '../../components/sign-in/SignIn';
import SingUp from '../../components/sign-up/SignUp';

const SignInSignUp = () => {
 return (
  <div className="sign-in-and-sign-up">
   <SignIn/>
   <SingUp/>
  </div>
 )
}

export default SignInSignUp
