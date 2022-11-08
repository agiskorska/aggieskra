import { Outlet } from 'react-router-dom'
import styles from './index.module.css'
import {Footer, Header} from '../../common'

function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home