import styles from './index.module.css'
function Card({children}) {
  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Card