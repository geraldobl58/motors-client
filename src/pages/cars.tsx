import { GetServerSidePropsContext } from 'next'
import CarsTemplate, { CarsTemplateProps } from 'templates/Cars'

import { initializeApollo } from 'utils/apollo'
import { parseQueryStringToWhere } from 'utils/filter'

import { QUERY_CARS } from 'graphql/queries/cars'
import {
  QueryVehicles,
  QueryVehiclesVariables
} from 'graphql/generated/QueryVehicles'

export default function Index(props: CarsTemplateProps) {
  return <CarsTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterSort = {
    title: 'Ordenar',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Maior Valor', name: 'preco:desc' },
      { label: 'Menor Valor', name: 'preco:asc' }
    ]
  }

  const filterPrice = {
    title: 'Preço',
    name: 'preco_lte',
    type: 'radio',
    fields: [
      { label: 'Até R$ 198.900,00', name: '198900' },
      { label: 'Até R$ 298.900,00', name: '298900' },
      { label: 'Até R$ 398.900,00', name: '398900' }
    ]
  }

  // const filtercategories = {
  //   title: 'Marcas',
  //   name: 'categorias',
  //   type: 'checkbox',
  //   fields: [
  //     { label: 'Ford', name: 'Ford' },
  //     { label: 'Fiat', name: 'fiat' }
  //   ]
  // }
  // const filterLocation = {
  //   title: 'Localidade',
  //   name: 'location',
  //   type: 'checkbox',
  //   fields: [
  //     { label: 'Minas Gerais', name: 'Minas Gerais' },
  //     { label: 'São Paulo', name: 'São Paulo' }
  //   ]
  // }

  const filterItems = [
    filterSort,
    filterPrice
    // filtercategories,
    // filterLocation
  ]

  await apolloClient.query<QueryVehicles, QueryVehiclesVariables>({
    query: QUERY_CARS,
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
