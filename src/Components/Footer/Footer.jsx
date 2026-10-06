import React from 'react'
import Classes from './Footer.module.css';
const Foooter = () => {
  return (
    <div className={Classes.footer}>
      <div>
        <ul className={Classes.links}>
            <li>Register</li>
            <li>Forum </li>
            <li>Affiliate</li>
            <li>FAQ</li>
        </ul>
        <ul className={Classes.icons}>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
        </ul>
        <ul className={Classes.text}>
            <li>© 2021. Foodera. All rights reserved.</li>
        </ul>

        </div>
      
    </div>
  )
}

export default Foooter
