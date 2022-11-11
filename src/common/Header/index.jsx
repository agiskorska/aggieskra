import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

import { Button, NavBar } from '../'
import styles from './index.module.css'
import sample from '../../assets/sample.jpg'

function Header() {
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 3000)
  })
  return (
    <header className={styles.root}>
        <NavBar />
        <div className={styles.push}></div>
        <div className={styles.zigzag}></div>
        <nav className={styles.nav} style={{opacity: opacity, transition: '2.5s all' }}>
          <NavLink className={styles.navlinkLeft} to='/'><span>Home</span></NavLink>
          <NavLink className={styles.navlinkRight} to='/about'><span>About</span></NavLink>
          <NavLink className={styles.navlinkLeft} to='/offer'><span>My offer</span></NavLink>
          <NavLink className={styles.navlinkRight} to='/contact'><span>Contact Me</span></NavLink>
        </nav>

        <section className={styles.hero}>
          <img src={sample} alt='sample image' className={styles.heroImg}/>
        </section>
    </header>
  )
}

export default Header