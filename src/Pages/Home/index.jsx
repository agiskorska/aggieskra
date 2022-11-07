import styles from './index.module.css'

import {ArticleSection, Button, Container, Heading} from '../../common'

function Home() {
  return (
    <div>
      <Container>
        <Heading>Welcome to my website</Heading>
        <ArticleSection>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam quam omnis. Tempora doloremque consectetur iusto odit fugiat, facilis labore autem? Commodi distinctio quidem repudiandae molestias, quaerat quos voluptate officia mollitia cum laudantium reprehenderit deserunt dolore aperiam autem aspernatur. Excepturi provident dolores debitis natus tempore non, at error? In, totam.</ArticleSection>
      </Container>
    </div>
  )
}

export default Home