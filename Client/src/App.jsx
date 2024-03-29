import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './screens/Mainpage/MainPage';
import LoginPage from './screens/Loginpage/LoginPage';
import LandingPage from './screens/Landingpage/LandingPage';

function App() {

  return (
    <>
      <Router>        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<MainPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
