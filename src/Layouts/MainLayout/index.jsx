import { Outlet } from 'react-router-dom'

import styles from './index.module.css'

function Home() {
  return (
    <div><Outlet /></div>
  )
}

export default Home