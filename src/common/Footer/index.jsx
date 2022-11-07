import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import tiktok from '../../assets/tiktok.png'



function Footer() {
  return (
    <footer className={styles.root}>
        <div className={styles.content}>
        <nav className={styles.nav}>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact us</NavLink>
        </nav>
       <div className={styles.socialMed}>
        <p>See us on Social Media</p>
        <div className={styles.media}>
          <a href="https://facebook.com"><img src={fb} alt="facebook" /></a>
          <a href="https://www.instagram.com/"><img src={insta} alt="instagram" /></a>
        </div>
       </div>
        <div className={styles.registry}>
          Our Company Is great!
        </div>
      </div>
        <p className={styles.rights}>Created &amp; maintained Aggie Skorska Ⓒ</p>
    </footer>
  )
}

export default Footer