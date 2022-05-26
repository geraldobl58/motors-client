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

    <S.Sections>
      <Container>
        <Heading lineLeft>Recomendados para você</Heading>
        <S.Separator>
          Realize seu sonho e encontre seu veículo ideal
        </S.Separator>
        <CardSlider items={recommended} />
      </Container>
    </S.Sections>

    <S.Sections>
      <Container>
        <Heading lineLeft>Carros mais buscados</Heading>
        <S.Separator>Confira aqui os carros mais buscados</S.Separator>
        <CardSlider items={mostSearchedCars} />
      </Container>
    </S.Sections>

    <S.Sections>
      <Container>
        <Heading lineLeft>Os mais vendidos</Heading>
        <S.Separator>Confira os mais vendidos</S.Separator>
        <CardSlider items={bestSellersCars} />
      </Container>
    </S.Sections>

    <S.Sections>
      <Container>
        <Heading lineLeft>Notícias</Heading>
        <S.Separator>Confira as últimas notícias</S.Separator>
      </Container>
    </S.Sections>
  </section>
)

export default Home
