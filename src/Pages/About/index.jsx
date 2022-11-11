import styles from './index.module.css'

import {ArticleSection, Button, Container, Heading} from '../../common'

function About() {
  return (
    <Container>
      <ArticleSection>
        <Heading>About me</Heading>
        <p>Passionate about development, self-driven, ambitious developer collaborating with a team of like minded people with aspiration to make the World Wide Web more accessible to all.</p>
        <Heading>My work</Heading>
        <div className={styles.links}>
          <p><a href='https://chippenhampride.com'>Chippenham Pride website</a></p>
          <p><a href='https://github.com/agiskorska'>My github</a></p>
          {/* <p><a href='https://chippenhampride.com'>Chippenham Pride website</a></p> */}
        </div>
      </ArticleSection>
    </Container>
  )
}

export default About