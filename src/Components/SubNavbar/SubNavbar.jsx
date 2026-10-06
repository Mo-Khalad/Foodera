import React, { useState } from 'react'
import Style from './SubNavbar.module.css'


const SubNavbar = () => {
  const [display, getDisplay] = useState(false)

  const closeSupNavbar = () => getDisplay(false);
  const displaySupNavbar = () => getDisplay(true);

  return (
    <>
      {display ? <nav className={Style.supNav}>
        <div className={Style.contentSupNav}>

          <ul className={Style.linksSupNav}>
            <i onClick={closeSupNavbar} class="fa-solid fa-xmark"></i>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore Foods</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li><button className={Style.supNavBtn}>1800 792 123</button></li>
          </ul>

        </div>
      </nav> : <i onClick={displaySupNavbar} className={`${'fa-solid fa-bars'} ${Style.menu}`}></i>}

    </>
  )
}

export default SubNavbar
