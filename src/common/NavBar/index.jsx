import React, { useState, useRef, useEffect } from 'react'

import logo from '../../assets/logo.png'
import styles from './index.module.css'

function Navbar() {
  const [height, setHeight] = useState('50vh')
  useEffect(() => {
    const timer = setTimeout(()=> {
        console.log('changing height')
        setHeight('10vh')
    }, 1500)
    
  }, [])

  return (
    <div className={styles.root} style={{height:height, transition: 'all 1.5s'}}>
        <div className={styles.logos}>
            <img src={logo}  alt="logo" className={styles.logo}/>
            <div className={styles.title}>Aggie Skorska</div>
        </div>
    </div>
  )
}

export default Navbar