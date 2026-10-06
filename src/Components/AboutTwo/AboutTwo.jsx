import React from 'react' ;
import Classes from './AboutTwo.module.css' ;
import picturesFoods from '../../images/pictures-Foods.webp';

const AboutTwo = () => {
    return (
        <div className={Classes.aboutTwo}>
          
            <div className={Classes.contentAboutTwo}>
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>
                    The difference in foods, diversity and distinction in taste makes 
                    us the first in the world to prepare the most delicious foods at 
                </p>
                <span><i class="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat.</span>
                <span><i class="fa-solid fa-check"></i> Erat volutpat aliquet imperdiet.</span>
                <span><i class="fa-solid fa-check"></i>purus a odio finibus bibendum.</span>
                <button>Learn More</button>
            </div>

            <div className={Classes.imageAboutTwo}>
                <img src={picturesFoods} alt='pictures Foods' width={600}/>
            </div>         
        </div>
      )
}
export default AboutTwo
