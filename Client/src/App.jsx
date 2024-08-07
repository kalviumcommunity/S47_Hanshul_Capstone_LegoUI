import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./screens/main/MainPage.jsx";
import LoginPage from "./screens/auth/LoginPage.jsx";
import LandingPage from "./screens/main/LandingPage.jsx";
import SignUp from "./screens/auth/SignUp.jsx";
import ForgotPasswordForm from "./screens/auth/ForgotPassword.jsx";
import ResetPassword from "./screens/auth/ResetPassword.jsx";
// import ChangePassword from "./screens/Profile/ChangePassword.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPasswordForm/>} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/reset/:id/:token" element={<ResetPassword  />} />
        </Routes>
      </Router>
    </>
  );  
}

export default App;
