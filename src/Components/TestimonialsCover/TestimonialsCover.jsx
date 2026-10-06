import React from 'react';
import Classes from './TestimonialsCover.module.css';

const TestimonialsCover = ({image}) => {
  return (
    <div className={Classes.testimonialsCover}>
    <div className={Classes.testimonialsContent}>
     <img src={image} alt='person' width={50}/>
     <p>
       Far far away, behind the word mountains, far from the
       countries Vokalia and Consonantia, there live the blind texts
       .Separated they live far from the countries Vokalia."
     </p>
     <h4>Johnthan Doe - UX Designer</h4>
    </div>
  </div>
  )
}

export default TestimonialsCover
