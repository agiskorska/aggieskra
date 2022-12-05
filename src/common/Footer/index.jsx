import {useEffect, useState} from 'react'
import styles from './index.module.css'
function Footer() {
  const [height, setHeight] = useState('50vh')
  const [opacity, setOpacity] = useState(0)
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    const timer = setTimeout(()=> {
      if (windowSize.innerWidth > 900){
        setHeight('150px')
      } else {
        setHeight(`${windowSize.innerHeight*0.21}px`)
      }
        setTimeout(()=> {setOpacity(1)}, 1500)
    }, 2000) // add extra 500ms delay
    console.log()
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
