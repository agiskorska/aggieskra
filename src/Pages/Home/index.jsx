import { Card, CardsContainer, Heading} from '../../common';
import styles from './index.module.css'

function Home() {
  return (
    <div>
      <CardsContainer>
        <Heading>Our journey to your big launch!</Heading>
        <div className={styles.tiles}>
          <div className={styles.cardLeft}>
            <div className={styles.borderLeft}></div>
              <Heading>1.</Heading>
              <Heading variant='gold'>Initial Talks</Heading>
              <p>First we need to establish what you need. Is it just an extended business card for your company? Or do you require a shop. Do you want people to be able to log in and store some information? Have a think of all these options. We can also discuss it, along with the prices and times of your idea. Also, think about the domain. You will have to have the address of your website, but if you're not sure how to get it, don't worry. I'll help you!</p>
          </div>
          <div className={styles.cardRight}>
            <Heading>2.</Heading>
            <Heading variant='gold'>Design</Heading>
            <p>Putting your thoughts to a live website is my specialty. I work with a software called Figma, where I put all my ideas to challenge them with reality. Once it's done, this is a picture of what your website will look like. It's not interactive, but don't worry. I can make your website look alive!</p>
          </div>
          <div className={styles.cardLeft}>
            <Heading>3.</Heading>
            <Heading variant='gold'>Development</Heading>
            <p>Once the project of your website is ready and you are happy with it, I can then put my fingers on the keyboard and start typing the code. Then I send the website to a temporary address and you can view it, interact with it, like it, or tell me to change it.</p>
          </div>
          <div className={styles.cardRight}>
            <Heading>4.</Heading>
            <Heading variant='gold'>Deployment</Heading>
            <p>Now it's the gran opening! Your site will be live soon! I will get the domain we discussed initially and make it your website! Now if you type in your address, you'll see what I made for you!</p>
          </div>
        </div>
      </CardsContainer>
    </div>
  )
}

export default Home