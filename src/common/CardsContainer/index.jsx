import styles from './index.module.css'

import {Button} from '../../common'

function CardsContainer({children}) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

export default CardsContainer