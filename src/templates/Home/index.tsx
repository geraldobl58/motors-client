import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'
import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import CardSlider from 'components/CardSlider'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  recommended: CardProps[]
  mostSearchedCars: CardProps[]
  bestSellersCars: CardProps[]
}

const Home = ({
  banners,
  recommended,
  mostSearchedCars,
  bestSellersCars
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    <BannerSlider items={banners} />

    <Container>
      <Heading lineLeft>Recomendados para você</Heading>
      <span>Realize seu sonho e encontre seu veículo ideal</span>
      <CardSlider items={recommended} />
    </Container>

    <Container>
      <Heading lineLeft>Carros mais buscados</Heading>
      <span>Confira aqui os carros mais buscados</span>
      <CardSlider items={mostSearchedCars} />
    </Container>

    <Container>
      <Heading lineLeft>Os mais vendidos</Heading>
      <span>Confira os mais vendidos</span>
      <CardSlider items={bestSellersCars} />
    </Container>

    <Container>
      <Heading lineLeft>Notícias</Heading>
      <span>Confira as últimas notícias</span>
    </Container>
  </section>
)

export default Home
