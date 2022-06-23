import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

import Home, { HomeTemplateProps } from 'templates/Home'

import cardMock from 'components/CardSlider/mock'

import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: data.banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link
      })),
      recommended: cardMock,
      mostSearchedCars: cardMock,
      bestSellersCars: cardMock
    }
  }
}
