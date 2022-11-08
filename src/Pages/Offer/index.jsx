import styles from './index.module.css'

import {Button, Card, CardsContainer, Heading} from '../../common'

function Offer() {
  const handleMore = () => {
    console.log('redirect to a page with more info')
  }
  return (
    <>
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