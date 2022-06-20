import { gql, useQuery } from '@apollo/client'

import { initializeApollo } from 'utils/apollo'

import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardMock from 'components/CardSlider/mock'

const GET_VEHICLES = gql`
  query getVehicles {
    vehicles {
      titulo
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_VEHICLES })

  return {
    props: {
      data: data,
      initializeApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      recommended: cardMock,
      mostSearchedCars: cardMock,
      bestSellersCars: cardMock
    }
  }
}
