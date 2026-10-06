import React from 'react'
import Style from './Home.module.css';

const Home = () => {    
  return (
   <>
      <div className={Style.home}>
          <div className={Style.homeContent}>
            <h4>Good food choices are good investments.</h4>
            <p>The most delicious food at the hands of our most skilled chefs, at special prices and special offers for families</p>
            <button className={Style.orderBtn}>Order</button>
            <button className={Style.MoreBtn}>Learn More</button> 
          </div>
      </div>
    </>
  )
}

export default Home
