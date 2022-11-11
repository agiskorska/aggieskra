import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import styles from './index.module.css'
import {Card, Container, Input} from '../../common'

function ContactForm() {
  const [isSent, setIsSent] = useState(false)
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    const elements = e.currentTarget.elements
    setTimeout(() => {
      setIsSent(true)
      for(let i=0; i <= elements.length-1; i++){
        if(elements[i].type !== 'submit') elements[i].value = ''
      }
    }, 800)  
  };
  return (
    <Container>
      <Card>

      {isSent ? <div>message sent, thank you.</div>: ''}
      <form className={styles.root} onSubmit={sendEmail} ref={form}>
        <div className={styles.left}>
          <Input type='text' name='from_name' defaultValue=''>Name</Input>
          <Input type='text' name='reply_to' defaultValue=''>Email</Input>
          <Input type='text' name='phone' defaultValue=''>Phone</Input>
        </div>
        <div className={styles.right}>
          <Input type='textarea' defaultValue='' name='message'>Your message</Input>
        </div>
        <div className={styles.center}>

          <Input type='submit' defaultValue='submit'></Input>
        </div>
      </form >
      </Card>
    </Container>
  )
}

export default ContactForm