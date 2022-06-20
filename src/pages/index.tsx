import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardMock from 'components/CardSlider/mock'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query getVehicles {
        vehicles {
          titulo
        }
      }
    `
  })

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
