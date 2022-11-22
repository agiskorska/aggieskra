import {useEffect, useState} from 'react'
import styles from './index.module.css'
function Footer() {
  const [height, setHeight] = useState('56vh')
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    const timer = setTimeout(()=> {
        setHeight('150px')
        setTimeout(()=> {setOpacity(1)}, 1500)
    }, 2000) // add extra 500ms delay
    
  }, [])
  return (
    <footer className={styles.root} style={{height: height, transition: 'all 1.5s'}}>
      <p className={styles.p}>Website Design & Development</p>
      <div className={styles.data} style={{opacity: opacity, transition: 'all 1.5s'}}>
        <p>+44 7598 397 503 </p> <p>contact@aggieskorska.co.uk</p>
      </div>
    </footer>
  )
}

export default Footer
