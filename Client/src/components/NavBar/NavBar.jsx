import React from 'react'
import './NavBar.css'
import HamburgerMenu from '../hamburger menu/HamburgerMenu'
import Togalbtn from '../Togal btn/Togalbtn'
// import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <header>
        <nav>
            <div className="left-nav">
                <div className='hamburgur-menu'>
                    <HamburgerMenu/>
                </div>

                <div className="Logo">
                    <h1>LEGO UI</h1>
                </div>    
            </div>

            <div className="center-nav">
                <input placeholder="Search" className='searchbar' type="text" />
            </div>

            <div className="right-nav">
                <div className="darkmode">
                    <Togalbtn/>
                </div>

                <div>
                    <button className="login-nav-btn nav-btn" type="button">Login</button>
                </div>
                
                <div >
                <button className="Signup-nav-btn nav-btn" > Sign Up</button>
                </div>
                <div className="profile-block">
                    <div className="profile"></div>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}
