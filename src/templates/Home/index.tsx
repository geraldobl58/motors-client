import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/Card'

import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

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
  <Base>
    <BannerSlider items={banners} />

    <S.Sections>
      <Showcase
        title="Recomendados para você"
        subtitle="Realize seu sonho e encontre seu veículo ideal"
        cards={recommended}
      />
    </S.Sections>

    <S.Sections>
      <Showcase
        title="Carros mais buscados"
        subtitle="Confira aqui os carros mais buscados"
        cards={mostSearchedCars}
      />
    </S.Sections>

    <S.Sections>
      <Showcase
        title="Os mais vendidos"
        subtitle="Confira os mais vendidos"
        cards={bestSellersCars}
      />
    </S.Sections>

    <S.Sections>
      <Showcase title="Notícias" subtitle="Confira as últimas notícias" />
    </S.Sections>
  </Base>
)

export default Home
