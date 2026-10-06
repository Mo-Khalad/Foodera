import React from 'react'
import Foodera from '../../images/Foodera.png'
import Style from './MainNavbar.module.css';

const MainNavbar = () => {
  return (
    <>
    <nav className={Style.mainNav}>
        <div className={Style.contentMainNav}>
            <ul>
            <img className={Style.imgNav} src={Foodera} alt="Foodera"/>
            </ul>

            <ul className={Style.linksMainNav}>
                <li>Home</li>
                <li>About Us</li>
                <li>Explore Foods</li>
                <li>Reviews</li>
                <li>FAQ</li>
                <li><button className={Style.mainNavBtn}>1800 792 123</button></li>
            </ul>
      
        </div>
    </nav>
    </>
  )
}

export default MainNavbar
