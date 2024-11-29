import React from 'react'
import './hero.css'
import Img from "../../assets/hero-img.png"

const hero = () => {
  return (
    <section className='hero-itm'>
        <div className="hero-itm1">
            <div>
                <p>Welcome</p>
                </div>
            <div>
                <h1>
                    Best Learning Opportunities
                </h1>
            </div>
            <div>
                <p>Our goal is to make online education work for everyone</p>
            </div>
            <div>
                <button>Join us</button>
                <button>Learn more</button>
            </div>
        </div>
        <div className="hero-itm2">
                <img src={Img}/>
        </div>
    </section>
  )
}

export default hero
