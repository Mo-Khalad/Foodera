import React from 'react'
import Classes from './OurNewsletter.module.css';
const OurNewsletter = () => {
  return (
    <>

      <div className={Classes.parallaxImage}>
        <div className={Classes.parallaxCover}></div>
        <p>Baked fresh daily by bakers with passion</p> 
        <button>Learn More</button>

      </div>
      <div className={Classes.contentParallax}>
        <div className={Classes.subscribe}>
           <h2> Hurry up! Subscribe our newsletter and get 25% Off</h2>
           <p>Limited time offer for this month. No credit card required.</p>
           <input type='email' placeholder='Email Address here'/>
           <button>subscribe</button>
        </div>
      </div>
    </>
  )
}

export default OurNewsletter
