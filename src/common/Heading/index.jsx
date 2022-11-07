import styles from './index.module.css'
function Heading({children}) {
  return (
    <h1 className={styles.root}>{children}</h1>
  )
}

export default Heading