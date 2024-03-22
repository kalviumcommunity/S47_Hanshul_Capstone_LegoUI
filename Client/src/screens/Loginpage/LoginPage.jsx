import React, { useState } from 'react';
import './Loginpage.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


export default function LoginPage() {
  const [loginLeft, setLoginLeft] = useState('0px');
  const [registerLeft, setRegisterLeft] = useState('450px');
  const [buttonLeft, setButtonLeft] = useState('0px');

  const login = () => {
    setLoginLeft('50px');
    setRegisterLeft('450px');
    setButtonLeft('0px');
  };

  const register = () => {
    setLoginLeft('-400px');
    setRegisterLeft('50px');
    setButtonLeft('110px');
  };

  return (
    <>
      <div className="LoginPage">
        <div className="hero">
          <div className="form-box">
            <div className="button-box" >
              <div id="btn" style={{ left: buttonLeft }}></div>
              <button type="button" className="toggle-btn" onClick={login}>
                Login
              </button>
              <button type="button" className="toggle-btn toggle-btn-right" onClick={register}>
                Register
              </button>
            </div>
            <form action="" id="login" className=" login-form input-group-login" style={{ left: loginLeft }}>
              <div className="input-box">
                <span className='icon'><MdEmail /></span>
                <input type="text" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <span className='icon'><RiLockPasswordFill /></span>
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="remember-forgot">
                <div>
                <input className="input-field check-box" type="checkbox" name="" id="" />
                <span>Remember Password</span>
                </div>
                <div>
                <a href="">Forgot Password</a>
                </div>
              </div>
              <button className="submit-btn-loginpage" type="submit">LogIn</button>
              <h3 className='or'>
                OR
              </h3>
              <button type="submit" className="google-btn">
                Google
              </button>
            </form>
            <form action="" id="register" className="input-group-register" style={{ left: registerLeft }}>
              <div className="input-box">
                <span className='icon'><FaUser /></span>
                <input type="text" required />
                <label htmlFor="">User Name</label>
              </div>
              <div className="input-box">
                <span className='icon'><MdEmail /></span>
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="input-box">
                <span className='icon'><RiLockPasswordFill /></span>
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="remember-forgot">
              <input type="checkbox" name="" id="" className="check-box" />
              <span>
                {' '}
                I agree to the <a href="">Terms & conditions</a>
              </span>
              </div>
              <button type="submit" className="submit-btn-loginpage">
                Sign Up
              </button>
              <h3 className='or'>
                OR
              </h3>
              <button type="submit" className="google-btn">
                Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
