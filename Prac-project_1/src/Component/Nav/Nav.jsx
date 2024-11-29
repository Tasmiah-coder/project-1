import React from 'react'
import Img from "../../assets/navbar.png"
import './Nav.css'

const Nav = () => {
  return (
    <navbar>
        <div className="nav">
            <div className='logo'>
                <img  src={Img} alt='Logo'/>
            </div>

            <div >
                <ul className='nav-itms'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='nav-button'>
                <div style={{color:'#96BB7C'}}>
                    Log in 
                </div>
                <div>
                    <button className='nav-itm_btn'>Join us</button>
                </div>
            </div>
        </div>

    </navbar>
  )
}

export default Nav
