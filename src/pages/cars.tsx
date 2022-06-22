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
  const apollotClient = initializeApollo()

  const { data } = await apollotClient.query<
    QueryVehicles,
    QueryVehiclesVariables
  >({
    query: QUERY_CARS,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      cars: data.vehicles.map((item) => ({
        slug: item.slug,
        img: item.cover?.url,
        make: item.make?.nome,
        title: item.titulo,
        version: item.version?.nome,
        fuel: item.combustivel,
        exchange: item.cambio,
        price: formatPrice(item.preco),
        year: item.ano,
        mileage: item.kilometragem?.toFixed(3),
        location: item.localization?.nome
      })),
      filterItems: filterItemMock
    }
  }
}
