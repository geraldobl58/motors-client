import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardMock from 'components/CardSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      recommended: cardMock,
      mostSearchedCars: cardMock,
      bestSellersCars: cardMock
    }
  }
}
