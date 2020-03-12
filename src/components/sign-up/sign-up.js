import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    // console.log('name:', name)
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('Passwords do not match')
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

    } catch (err) {
      console.log(err)
    }

  }


  render() {
    return (
      <div>
        <h2 className='sign-up'>Don't have an account?</h2>
        <span className='title'>Create one here</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'> Sign Up</CustomButton>
        </form>
      </div>
    )
  }

}

export default SignUp
