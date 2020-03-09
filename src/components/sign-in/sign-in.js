import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'
import CustomButtom from '../custom-button/custom-button'


class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Already have an account?</h2>
        <span className='span'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
          />
          <div className='buttons'>
            <CustomButtom
              type='submit'
            >Sign In</CustomButtom>
            <CustomButtom
              onClick={signInWithGoogle}
              isGoogleSignIn
            >Sign In with Google</CustomButtom>
          </div>
        </form>
      </div>
    )
  }

}

export default SignIn
