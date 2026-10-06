import React from 'react'
import Classes from './About.module.css';
import vegetableSalad from '../../images/Vegetable salad.png';

const About = () => {
  return (
    <div className={Classes.about}>
        <div className={Classes.imageAbout}>
            <img src={vegetableSalad} alt='vegetable Salad' width={500}/>
        </div>
        <div className={Classes.contentAbout}>
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>
              Vegetable salad is one of the healthiest meals and is offered 
              at a 50% discount until the end of the month
            </p>
            <button>Learn More</button>



        </div>
      
    </div>
  )
}

export default About
