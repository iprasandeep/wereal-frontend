import React from 'react'
import './register.css';

const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">WeReal</h3>
                <span className="loginDesc">Connect with friends and the world around you on WeReal.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type='username' placeholder='Username' className='loginInput' />
                    <input type='password' placeholder='Password' className='loginInput' />
                    <input type='password' placeholder='Password Again' className='loginInput' />
                    <input  type='email' placeholder='Email' className='loginInput' />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;