import React from 'react';
import person1 from '../../images/person1.webp';
import person2 from '../../images/person2.webp';
import person3 from '../../images/person3.webp';

import { Swiper , SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../../../node_modules/swiper/modules/pagination.min.css';
import Classes from './Testimonials.module.css';
import TestimonialsCover from '../TestimonialsCover/TestimonialsCover';

const images =[person1 , person2 , person3];
const Testimonials = () => {
  const imagesCopy=[...images];
        return (
            <>
          <div className={Classes.testimonials}>
          <h2 className={Classes.testimonialsText}>Testimonials</h2>

          <Swiper
           modules={[ Pagination ]}
           spaceBetween={50}
           slidesPerView={1}
           pagination={{ clickable: true }}
          >
              {imagesCopy.map((image)=> <SwiperSlide> <TestimonialsCover image={image}/></SwiperSlide>)}
            </Swiper>  
         </div>
   </>          
);
}

export default Testimonials