import React, { useState } from "react";
import "../Styles/Loginpage.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginLeft, setLoginLeft] = useState("0px");
  const [registerLeft, setRegisterLeft] = useState("450px");
  const [buttonLeft, setButtonLeft] = useState("0px");
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signupEmail, setsignupEmail] = useState("");
  const [signupPassword, setsignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tc, setTc] = useState(false);

  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:500/api/user/login", {
        email,
        password,
      });
      if (res.status === 200 && res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        navigate("/main");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert("Invalid email or password");
      } else if (error.request) {
        console.log(error.request);
        alert("Unable to connect to the server");
      } else {
        console.log("Error", error.message);
        alert("An error occurred");
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
   
    if (!tc) {
       alert("Please accept the terms and conditions.");
       return;
    }
   
    if (password !== confirmPassword) {
       alert("Password and confirm password should be the same.");
       return; 
    }
   
    try {
       const res = await axios.post("http://localhost:500/api/user/register", {
         name: username,
         signupEmail:email ,
         signupPassword: password,
         password_confirmation: confirmPassword,
         tc: tc,
       });
   
       if (res.data.status === "success") {
         alert("Registration successful");
         navigate("/main");
       } else {
         if (res.data.message === "Email already exists") {
           alert("This email already exists. Please use a different email.");
         } else {
           alert("Registration failed: " + res.data.message);
         }
       }
    } catch (error) {
       alert("An error occurred during registration");
    }
   };

  const loginwithgoogle = () => {
    window.open("http://localhost:500/auth/google/callback", "_self");
  };

  const login = () => {
    setLoginLeft("50px");
    setRegisterLeft("450px");
    setButtonLeft("0px");
  };

  const register = () => {
    setLoginLeft("-400px");
    setRegisterLeft("50px");
    setButtonLeft("110px");
  };

  const showpass = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="LoginMaindiv">
        <div className="LoginPage">
          <div className="hero">
            <div className="form-box">
              <div className="button-box">
                <div id="btn" style={{ left: buttonLeft }}></div>
                <button  type="button" className="toggle-btn" onClick={login}>Login</button>
                <button type="button"className="toggle-btn toggle-btn-right"onClick={register}>Register</button>
              </div>
              <form onSubmit={handlelogin}id="login"className=" login-form input-group-login"style={{ left: loginLeft }}>
                <div className="form-box-submit">
                  <div className="input-box">
                    <span className="icon"><MdEmail /></span>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" required />
                    <label htmlFor="">Email</label>
                  </div>
                  <div className="input-box">
                    <span onClick={showpass} className="icon"><RiLockPasswordFill /></span>
                    <input onChange={(e) => setPassword(e.target.value)} type={passwordType} required />
                    <label htmlFor="">Password</label>
                  </div>
                  <div className="remember-forgot">
                    <div>
                      <input className="input-field check-box"type="checkbox"name=""id=""/>
                      <span>Remember Password</span>
                    </div>
                    <div>
                      <a href="">Forgot Password</a>
                    </div>
                  </div>
                  <button className="submit-btn-loginpage" type="submit">LogIn</button>
                </div>
                <h3 className="or">OR</h3>
                
                <button onClick={loginwithgoogle}className="google-btn">Google</button>
              </form>

              <form onSubmit={handleSignUp}id="register"className="input-group-register"style={{ left: registerLeft }}>
                <div className="form-box-submit">
                  <div className="input-box">
                    <span className="icon"><FaUser /></span>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" required />
                    <label htmlFor="">User Name</label>
                  </div>
                  <div className="input-box">
                    <span className="icon"><MdEmail /></span>
                    <input onChange={(e) => setsignupEmail(e.target.value)} type="email" required />
                    <label htmlFor="">Email</label>
                  </div>
                  <div className="input-box">
                    <span onClick={showpass} className="icon"><RiLockPasswordFill /></span>
                    <input onChange={(e) => setsignupPassword(e.target.value)} type={passwordType} required />
                    <label htmlFor="">Password</label>
                  </div>
                  <div className="input-box">
                    <span onClick={showpass} className="icon"><RiLockPasswordFill /></span>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type={passwordType} required />
                    <label htmlFor="">Confirm Password</label>
                  </div>
                  <div className="remember-forgot">
                    <input type="checkbox"onChange={(e) => setTc(e.target.checked)}name=""id=""className="check-box"/>
                    <span>{" "}I agree to the <a href="">Terms & conditions</a></span>
                  </div>
                  <button type="submit" className="submit-btn-loginpage">Sign Up</button>
                </div>
                <h3 className="or">OR</h3>
                <button onClick={loginwithgoogle}className="google-btn">Google</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
