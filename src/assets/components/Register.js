import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import '../css/Login.css';
import { Link } from 'react-router-dom';

function Register({onBackClick, onClose}) {

    
  return (
    <div className="wrapper">
        <Link to='/'>
            <span className='icon-close' onClick={onClose} >
                <i><GrClose /></i>
            </span> 
        </Link>
        <div className="form-box register">
            <h2>Registration</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <i><FaUser/></i>
                    </span>
                    <input type="text" required/>
                    <label>UserName</label>
                </div>
                <div className="input-box">
                    <span className="icon">
                        <i><FaEnvelope/></i>
                    </span>
                    <input type="email" required/>
                    <label>Email</label>
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
                            I agree to the 
                            <a href='/'> Terms & Conditions</a>
                    </label>
                            
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account ?
                        <Link to="/login" onClick={onBackClick} className="login-link"> Login</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register