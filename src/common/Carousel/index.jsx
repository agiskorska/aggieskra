import {useEffect, useState} from 'react'

import styles from './index.module.css'

function Carousel({slides, timer, arrows}) {
  const [slideNo, setSlideNo] = useState(0)
  useEffect(() => {

    setInterval(() => {setSlideNo(prev => {
      if (prev + 1 == slides.length) return 0
      return prev + 1
    })}, timer)

  }, [])

  const handleOnClick = (arrow) => {
    let change = 1
    if (arrow == 'left') {
      change = -1 
      if (slideNo == 0){
        setSlideNo(slides.length - 1)
        return
      } else {
        setSlideNo(prev => prev + change)
      }
    }
    if (slideNo == slides.length - 1) {
      setSlideNo(0)
    } else {
      setSlideNo(prev => prev + change)
    }
  }

  return (
    <div className={styles.root}>
      {arrows && <div className={styles.arrowLeft} onClick={() => handleOnClick('left')}>&lt;</div>}
      {arrows && <div className={styles.arrowRight} onClick={() => handleOnClick('right')}>&gt;</div>}
      {slides[slideNo]}
    </div>
  )
}

export default Carousel