import styles from './index.module.css'

import {ArticleSection, Button, Card, CardsContainer, Container, Heading} from '../../common'

function Offer() {
  const handleMore = () => {
    console.log('redirect to a page with more info')
  }
  return (
    <>
      <Container>
        <ArticleSection>
          <Heading>What can I do for you?</Heading>
          <p>I build my websites in Vanilla JS or React. I can also work on a code that has already been written. I am happy to add some features to your WordPress website, if you already have one.<br /> If you require anything more complex, an e-commerce store, contact me for availability, as the waiting time can be extended in busy periods. <br /> If you have a design ready and you are just looking for a developer, please send me the design to the following email address: skorskaga@gmail.com. I will send you a quote within 1 working day.</p>
        </ArticleSection>
      </Container>
      <CardsContainer>
        <Card>
          <Heading variant='offer'>Logo Desing</Heading>
          <p className={styles.shortDescription}>We can offer you a professional Logo design if you require one.</p>
          <div className={styles.more} onClick={handleMore}>more</div>
          <div className={styles.from}>from </div>
          <div className={styles.price}>£20</div>
        </Card>
        <Card>
          <Heading variant='offer'>Website Design</Heading>
          <p className={styles.shortDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam porro quas reprehenderit ipsa tempora asperiores praesentium placeat illum sunt?</p>
          <div className={styles.more} onClick={handleMore}>more</div>
          <div className={styles.from}>from </div>
          <div className={styles.price}>£50</div>
        </Card>
        <Card>
          <Heading variant='offer'>Website Development</Heading>
          <p className={styles.shortDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam porro quas reprehenderit ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam porro quas reprehenderit ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam porro quas reprehenderit ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam porro quas reprehenderit ipsa tempora asperiores praesentium placeat illum sunt?</p>
          <div className={styles.more} onClick={handleMore}>more</div>
          <div className={styles.from}>from </div>
          <div className={styles.price}>£100</div>
        </Card>
      </CardsContainer>
    </>
  )
}

export default Offer