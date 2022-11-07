import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, NavBar } from '../'
import styles from './index.module.css'
import sample from '../../assets/sample.jpg'

function Header() {
  
  return (
    <header className={styles.root}>
        <NavBar />
        <section className={styles.hero}>
          <img src={sample} alt='sample image' className={styles.heroImg}/>
        </section>
    </header>
  )
}

export default Header