import React, { useState } from 'react';
import './Loginpage.css';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';

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
          {/* <div className="social-icons">
            <i>
              <FaSquareXTwitter className="icons" />
            </i>
            <i>
              <FaInstagram className="icons" />
            </i>
            <i>
              <FaFacebook className="icons" />
            </i>
          </div> */}
          <form action="" id="login" className=" login-form input-group" style={{ left: loginLeft }}>
            <input className="input-field" type="text" name="" id="" placeholder="User Id" required />
            <input className="input-field" type="text" name="" id="" placeholder="Enter Password" required />
            <input className="input-field" type="checkbox" name="" id="" className="check-box" />
            <span>Remember Password</span>
            <button className="submit-btn" type="submit">LogIn</button>
          </form>

          <form action="" id="register" className="input-group" style={{ left: registerLeft }}>
            <input className="input-field" type="text" name="" id="" placeholder="User Id" required />
            <input className="input-field" type="email" name="" id="" placeholder="Enter Email" required />
            <input className="input-field" type="text" name="" id="" placeholder="Enter Password" required />
            <input type="checkbox" name="" id="" className="check-box" />
            <span>
              {' '}
              I agree to the <a href="">Terms & conditions</a>
            </span>
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
