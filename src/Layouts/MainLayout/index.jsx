import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.css'
import {Footer, Header} from '../../common'

function Home() {

  const [actualClass, setActualClass] = useState(styles.root) // opacity 0 initially
  setTimeout(() => {
    setActualClass(styles.root2) // everything is visible after 500 ms, rectangle is gone already
  }, 500)

  return (
    <div className={actualClass}>
      {/* TODO come up with how to bring the zigzag without disabling navbar */}
      {/* <div className={styles.zigzag}></div> */}
      <Header />
      <main className={styles.outletWrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Home
