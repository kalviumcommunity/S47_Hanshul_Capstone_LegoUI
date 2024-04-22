import React from 'react'
import nav from '../Styles/NavBar.module.css'
import HamburgerMenu from './HamburgerMenu'
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import Togalbtn from '../Togal btn/Togalbtn'
// import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <header >
        <nav className={nav.navbar}>
            <div className={nav.leftnav}>
                <div className={nav.hamburgurmenu}>
                    <HamburgerMenu/>
                </div>

                <div className={nav.logo}>
                    <h1>LEGO UI</h1>
                </div>    
            </div>

            <div className={nav.centernav}>
                <input placeholder="Search" className={nav.searchbar} type="text" />
            </div>

            <div className={nav.rightnav}>

                <div>
                    <FaPinterest className={nav.icons} />
                </div>
                <div>
                    <FaTwitter className={nav.icons}/>
                </div>
                <div>
                    <FaInstagram className={nav.icons}/>
                </div>
            
            </div>
        </nav>
      </header>
    </>
  )
}
