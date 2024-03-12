import '../../App.css'
import React from 'react'
import './Login.css'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
//import Login from './Login'
/**
function SignUp() {
  return (
    <>
      <Login />
    </>
  )
}
export default SignUp
**/
//wrapper 1 classname change
//const SignUp = () => {
export default function SignUp() {
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
    <div className='sign-up'>
      <form action=''>
        <h1>Login</h1>
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
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='sumbit' onClick={sumbit}>
          sumbit
        </button>
        <div className='register-link'>
          <p>
            Don't have an account?
            <Link to='/register'> Register </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

/* 
export default function SignUp()
<a href='#'>Register</a>
{
  return (
    <div className='sign-up'>
      <div className='header'>
        <div className='text'> Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={<i class='fa-solid fa-envelope'></i>} alt='' />
          <input type='text' />
        </div>
        <div className='input'>
          <img src={<i class='fa-solid fa-user'></i>} alt='' />
          <input type='email' />
        </div>
        <div className='input'>
          <img src={<i class='fa-solid fa-lock'></i>} alt='' />
          <input type='password' />
        </div>
      </div>
    </div>
  )
}


*/
