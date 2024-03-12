import React from 'react'
import '../../App.css'
import './Register.css'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function sumbit(e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/', {
        email,
        password,
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='register'>
      <form action=''>
        <h1>Register</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder='Email'
            required
          />
          <MdEmail className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder='Password'
            required
          />
          <FaLock className='icon' />
        </div>

        <button type='sumbit' onClick={sumbit}>
          sumbit
        </button>
        <div className='register-link'>
          <p>
            Do you already have a registered user?
            <Link to='/Sign-up'> Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
