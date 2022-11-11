import { useState } from 'react'

import styles from './index.module.css'
function Input({type, name, defaultValue, handleClick, children}) {
  const [value, setValue] = useState(defaultValue)
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <label className={styles.root}><p>{children}</p>
      {type !== 'textarea' ? 
        <input className={defaultValue=='submit' ? styles.submit : styles.input} type={type} value={value} onChange={handleChange} onClick={handleClick} name={name}/> :
        <textarea className={styles.textarea} name={name}></textarea>
      }
    </label>
  )
}

export default Input