import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft>Recomendados para você</Heading>
      <span>Realize seu sonho e encontre seu veículo ideal</span>
    </Container>

    <Container>
      <Heading lineLeft>Carros mais buscados</Heading>
      <span>Confira aqui os carros mais buscados</span>
    </Container>

    <Container>
      <Heading lineLeft>Os mais vendidos</Heading>
      <span>Confira os mais vendidos</span>
    </Container>

    <Container>
      <Heading lineLeft>Notícias</Heading>
      <span>Confira as últimas notícias</span>
    </Container>
  </section>
)

export default Home
