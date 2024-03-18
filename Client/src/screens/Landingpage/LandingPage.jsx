import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
      <div className='LandingPage'>
        <nav className="nav-LandingPage">
          <div className="left-nav-LandingPage">
            <ul className="left-nav-components-landingpage">
              <li><a className='a-LandingPage' href="">Home</a></li>
              <li><a className='a-LandingPage' href="">About</a></li>
              <li><a className='a-LandingPage' href="">Blog</a></li>
              <li><a className='a-LandingPage' href="">Contact us</a></li>
            </ul>
          </div>
          <div className="right-nav-LandingPage">
            
          </div>
        </nav>
      <main className="main-LandingPage">
        <h1 className='landingPage-title'>Build Websites. Bricked by Brilliance. <br /> With <span className='span'>LEGO UI</span></h1>
        {/* <p className="p_LandingPage" >Legoui: Build websites like a breeze with our React UI component library!  Snap together stylish, pre-built components to create modern websites quickly. Upload and share your code with the community, and get inspired by others. </p> */}
      </main>

      <div class="btn-LandingPage">
        <button class="button-74" role="button">Lets Build</button>
      </div>
      </div>
    </>
  )
}
