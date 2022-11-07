import { Outlet } from 'react-router-dom'
import styles from './index.module.css'
import {Footer, Header} from '../../common'

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home