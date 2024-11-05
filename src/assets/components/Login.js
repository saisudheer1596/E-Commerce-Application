import React, { useState } from 'react'
import '../css/Login.css'
import { FaLock, FaUser } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import Register from './Register';
import { Link } from 'react-router-dom';

function Login({ onRegisterClick, onClose }) {
    
    
    
    
  return (
    <div   className='wrapper '>
        <Link to='/'>
            <span className='icon-close' onClick={onClose} >
                <i><GrClose /></i>
            </span> 
        </Link>
               
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <i><FaUser/></i>
                    </span>
                    <input type="Username" required/>
                    <label>UserName</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <i><FaLock/></i>
                    </span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                    <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>
                            Remember me
                    </label>
                    <a href="#"> Forgot Password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account ?
                        <Link to="/register" onClick={onRegisterClick} className='register-link'> Register</Link>
                    </p>
                </div>
            </form>
        </div>
        
                
    </div>
  )
}

export default Login