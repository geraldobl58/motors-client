import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardMock from 'components/CardSlider/mock'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getVehicles {
      vehicles {
        titulo
      }
    }
  `)

  if (loading) return <p>Loading</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      recommended: cardMock,
      mostSearchedCars: cardMock,
      bestSellersCars: cardMock
    }
  }
}
