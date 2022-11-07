import styles from './index.module.css'

function ArticleSection({children, background}) {
  return (
  <article className={background ? styles.highlight : styles.article}>
    {children}
  </article>
  )
}

export default ArticleSection