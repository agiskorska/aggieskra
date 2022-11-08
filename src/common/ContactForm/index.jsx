import styles from './index.module.css'

import {Button, Container, Input} from '../../common'

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const elements = e.currentTarget.elements
    //TODO here validate the elements and send to the mailer
    console.log('name: ', elements[0])
    console.log('email: ', elements[1])
    console.log('phone: ', elements[2])
    console.log('msg: ', elements[3])

    for(let i=0; i <= elements.length-1; i++){
      if(elements[i].type !== 'submit') elements[i].value = ''
    }
  }
  return (
    <Container>
      <form className={styles.root} onSubmit={handleSubmit}>
        <Input type='text' name='name' defaultValue=''>Name</Input>
        <Input type='text' name='email' defaultValue=''>Email</Input>
        <Input type='text' name='phone' defaultValue=''>Phone</Input>
        <Input type='textarea' defaultValue=''>Your message</Input>
        <Input type='submit' defaultValue='submit'></Input>
      </form >
    </Container>
  )
}

export default ContactForm