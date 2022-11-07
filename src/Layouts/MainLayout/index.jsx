import { Outlet } from 'react-router-dom'
import styles from './index.module.css'
import {NavBar, Footer} from '../../common'

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home