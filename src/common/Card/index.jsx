import styles from './index.module.css'
function Card({children}) {
  return (
    <div className={styles.root}>
      {/* <div className={styles.smallImg}></div> */}
      {children}
    </div>
  )
}

export default Card