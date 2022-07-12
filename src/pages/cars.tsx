import CarsTemplate, { CarsTemplateProps } from 'templates/Cars'

import { initializeApollo } from 'utils/apollo'
import { formatPrice } from 'utils/formattedPrice'

import filterItemMock from 'components/ExploreSidebar/mock'

import { QUERY_CARS } from 'graphql/queries/cars'
import {
  QueryVehicles,
  QueryVehiclesVariables
} from 'graphql/generated/QueryVehicles'

export default function Index(props: CarsTemplateProps) {
  return <CarsTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryVehicles, QueryVehiclesVariables>({
    query: QUERY_CARS,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemMock
    }
  }
}
