import React from 'react'
import './hero.css'
import Img from "../../assets/hero-img.png"

const hero = () => {
  return (
    <section className='hero-itm'>
        <div className="hero-itm1 hero-itms">
            <div>
                <p style={{color:'#96BB7C'}}>Welcome</p>
                </div>
            <div>
                <h1 className='hero-heading'>
                    Best Learning Opportunities
                </h1>
            </div>
            <div className='hero-content'>
                <p>Our goal is to make online education work for everyone</p>
               
            </div>
            <div>
                <button className='btn1'>Join us</button>
                <button className='btn2'>Learn more</button>
            </div>
        </div>
        <div className="hero-itm2 hero-itms">
                <img src={Img} style={{width:'600px'}}/>
        </div>
    </section>
  )
}

export default hero
