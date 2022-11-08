import { Outlet } from 'react-router-dom'
import styles from './index.module.css'
import {Footer, Header} from '../../common'

function Home() {
  return (
    <div className={styles.root}>
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