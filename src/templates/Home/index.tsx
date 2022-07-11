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
  recommendedTitle: string
  recommendedSubTitle?: string
  mostWantedTitle: string
  mostWantedSubTitle?: string
  bestSellersTitle: string
  bestSellersSubTitle?: string
}

const Home = ({
  banners,
  recommended,
  mostSearchedCars,
  bestSellersCars,
  recommendedTitle,
  recommendedSubTitle,
  mostWantedTitle,
  mostWantedSubTitle,
  bestSellersTitle,
  bestSellersSubTitle
}: HomeTemplateProps) => (
  <Base>
    <BannerSlider items={banners} />

    <S.Sections>
      {recommended.length > 0 && (
        <Showcase
          title={recommendedTitle}
          subtitle={recommendedSubTitle}
          cards={recommended}
        />
      )}
    </S.Sections>

    <S.Sections>
      {mostSearchedCars.length > 0 && (
        <Showcase
          title={mostWantedTitle}
          subtitle={mostWantedSubTitle}
          cards={mostSearchedCars}
        />
      )}
    </S.Sections>

    <S.Sections>
      {bestSellersCars.length > 0 && (
        <Showcase
          title={bestSellersTitle}
          subtitle={bestSellersSubTitle}
          cards={bestSellersCars}
        />
      )}
    </S.Sections>

    <S.Sections>
      <Showcase title="Notícias" subtitle="Confira as últimas notícias" />
    </S.Sections>
  </Base>
)

export default Home
