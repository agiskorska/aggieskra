import styles from './index.module.css'

import {ArticleSection, Button, Container, Heading} from '../../common'

function About() {
  return (
    <Container>
      <ArticleSection>
        <Heading>About me</Heading>
        <p>Passionate about development, self-driven, ambitious developer collaborating with a team of like minded people with aspiration to make the World Wide Web more accessible to all.</p>
        <p>I create my websites in technology called ReactJS. It is a special framework in JavaScript that allows for very quick re-rendering of a website and by doing so it is quick, seamless and efficient. Instead of reloading a website after moving to another tab, React repaints the current website with new content. That's why it is so efficient and neat leaving such technologies as WordPress or Wix behind.</p>
        <Heading>What you can expect</Heading>
        <p>I have strong skills in web development and I am constantly improving my knowledge about design and User Experience (UX). I know how important the fist impression can be and how much a business relies on it, so I will make sure your website is unique, easy to use and memorable. These features can give you an advantage over your competition.</p>
        <p>These days many businesses have outdated websites. Your client opens your website (most likely on their phone) and if they find it difficult to use, they're going to go back to their Google search and get the next link that would most likely be your competition. </p>
        <p>I use mobile-first approach, which means I am building my websites so that they are good looking on phones first, only then do I check how they present on a desktop. This is the most recent approach to website development. If you would like to learn more about that, don't hesitate to drop me an email.</p>
        <Heading>My work</Heading>
        <div className={styles.links}>
          <p><a href='https://chippenhampride.com'>Chippenham Pride website</a></p>
          <p><a href='https://chippenhampride.com'>Chippenham Pride website</a></p>
          <p><a href='https://github.com/agiskorska'>My github</a></p>
          {/* <p><a href='https://chippenhampride.com'>Chippenham Pride website</a></p> */}
        </div>
      </ArticleSection>
    </Container>
  )
}

export default About