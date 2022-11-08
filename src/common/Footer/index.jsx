import {useEffect, useState} from 'react'
import styles from './index.module.css'
function Footer() {
  const [height, setHeight] = useState('56vh')
  useEffect(() => {
    const timer = setTimeout(()=> {
        console.log('changing height')
        setHeight('20vh')
    }, 1500)
    
  }, [])
  return (
    <footer className={styles.root} style={{height: height, transition: 'all 1.5s'}}>
      <p className={styles.p}>Website Design & Development</p>
    </footer>
  )
}

export default Footer