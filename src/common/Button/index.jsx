import React from 'react'

import styles from './index.module.css'

function Button({ text, variant, handleClick}) {
  // console.log(handleClick)
  return (
    <button className={styles[variant]} onClick={handleClick}>{text}</button>
  )
}

export default Button