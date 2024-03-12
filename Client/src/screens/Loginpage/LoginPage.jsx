import React, { useState } from "react";
import "./Loginpage.css";
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = (isLogin) => {
    setIsLoginForm(isLogin);
    console.log(isLoginForm);
  };

  return (
    <>
      <div className="login-page">
        <div className={`wrapper ${isLoginForm ? 'active' : ''}`}>
          <span className="bg-animate"></span>
          <span className="bg-animate2"></span>

          <div className="form-box login ">
            <h2 className="animation" style={{'--i': 0 }}>Login</h2>
            <form action="/">
              <div className="input-box animation" style={{'--i': 1 }}>
                <input type="text" required />
                <label>Username</label>
                <i>
                  {" "}
                  <FaUser />{" "}
                </i>
              </div>
              <div className="input-box animation"style={{'--i': 2 }}>
                <input type="password" required />
                <label>Password</label>
                <i>
                  <IoLockClosed />
                </i>
              </div>
              <button className="submit-btn-login animation"style={{'--i': 3 }} type="submit">
                Login
              </button>
              <div className="loger-link animation" style={{'--i': 4 }}>
                <p>
                  Don't have an account?{" "}
                  <a className="register-link" onClick={() => toggleForm(true)}>
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="info-text login">
            <h2>Welcome Back!</h2>
            <p className="text-login">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="form-box register">
            <h2 className="animation">Sign Up</h2>
            <form action="/">
              <div className="input-box animation">
                <input type="text" required />
                <label>Username</label>
                <i>
                  {" "}
                  <FaUser />{" "}
                </i>
              </div>
              <div className="input-box animation">
                <input type="text" required />
                <label>Email</label>
                <i>
                  {" "}
                  <MdEmail />{" "}
                </i>
              </div>
              <div className="input-box animation">
                <input type="password" required />
                <label>Password</label>
                <i>
                  <IoLockClosed />
                </i>
              </div>
              <button className="submit-btn-login animation" type="submit">
                Sign Up
              </button>
              <div className="loger-link animation">
                <p>
                  Already have an account?{" "}
                  <a className="login-link" onClick={() => toggleForm(true)}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="info-text register">
            <h2 className="animation">Welcome Back!</h2>
            <p className="register-text animation">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}
