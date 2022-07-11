import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

import {
  bannersMapper,
  bestSellersCarsMapper,
  mostSearchedCarsMapper,
  recommendedMapper
} from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, recommended, mostWanted, bestSellers, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: bannersMapper(banners),
      recommendedTitle: sections?.recomendados?.title,
      recommendedSubTitle: sections?.recomendados?.subtitle,
      recommended: recommendedMapper(recommended),
      mostWantedTitle: sections?.buscados?.title,
      mostWantedSubTitle: sections?.buscados?.subtitle,
      mostSearchedCars: mostSearchedCarsMapper(mostWanted),
      bestSellersTitle: sections?.vendidos?.title,
      bestSellersSubTitle: sections?.vendidos?.subtitle,
      bestSellersCars: bestSellersCarsMapper(bestSellers)
    }
  }
}
