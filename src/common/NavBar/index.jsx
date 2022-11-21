import React, { useState, useRef, useEffect } from 'react'

import logo from '../../assets/logo.png'
import styles from './index.module.css'

function Navbar() {
  const [height, setHeight] = useState('50vh')
  const [opacity, setOpacity] = useState(1)
  const [justify, setJustify] = useState('flex-end')
  useEffect(() => {
    const timer1 = setTimeout(()=> {
        setHeight('10vh')
    }, 2000) // add extra 500ms delay
    const timer = setTimeout(()=> {
      setOpacity(0)
  }, 2500) // add extra 500ms delay
    
  }, [])


  return (
    <div className={styles.root} style={{height:height, transition: 'all 1.5s'}}>
        <div className={styles.logos} style={{ opacity:opacity, justifyContent: justify,transition: 'all 1.5s'}}>
            <img src={logo}  alt="logo" className={styles.logo}/>
            <div className={styles.title}>Aggie Skorska</div>
        </div>
        <div className={styles.logosLeft} style={{ opacity:opacity ? '0' : '1', justifyContent: justify,transition: 'all 1.5s'}}>
            <img src={logo}  alt="logo" className={styles.logoLeft}/>
            <div className={styles.titleLeft}>Aggie Skorska</div>
        </div>
    </div>
  )
}

export default Navbar
