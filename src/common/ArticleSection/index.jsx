import React from 'react'
import styles from './index.module.css'
function ArticleSection({header, children, background}) {
  return (
  <article className={background ? styles.highlight : styles.article}>
    <h1 className={styles.h1}>{header}</h1>
    {children}
  </article>
  )
}

export default ArticleSection