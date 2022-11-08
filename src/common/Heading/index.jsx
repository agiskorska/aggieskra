import styles from './index.module.css'
function Heading({children, variant}) {
  return (
    <h1 className={variant ? styles[variant] : styles.root}>{children}</h1>
  )
}

export default Heading