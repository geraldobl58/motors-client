import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  QueryVehicles,
  QueryVehiclesVariables
} from 'graphql/generated/QueryVehicles'
import { QUERY_CARS, QUERY_CAR_BY_SLUG } from 'graphql/queries/cars'
import {
  QueryVehicleBySlug,
  QueryVehicleBySlugVariables
} from 'graphql/generated/QueryVehicleBySlug'

import { initializeApollo } from 'utils/apollo'

import Car, { CarTemplateProps } from 'templates/Car'

const apolloClient = initializeApollo()

export default function Index(props: CarTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Car {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryVehicles,
    QueryVehiclesVariables
  >({
    query: QUERY_CARS,
    variables: { limit: 9 }
  })

  const paths = data.vehicles.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryVehicleBySlug,
    QueryVehicleBySlugVariables
  >({ query: QUERY_CAR_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.vehicles.length) {
    return { notFound: true }
  }

  const car = data.vehicles[0]

  return {
    props: {
      revalidate: 60,
      singleInfo: {
        make: car.make?.nome,
        title: car.titulo,
        year: car.ano,
        milage: car.kilometragem?.toFixed(3),
        fuel: car.combustivel,
        exchange: car.cambio,
        color: car.cor,
        endOfPlate: car.placa_final,
        price: car.preco,
        description: car.descricao
      },
      gallery: car.gallery.map((image) => ({
        src: image.url
      })),
      details: {
        make: car.make?.nome,
        version: car.version?.nome,
        location: car.localization?.nome
      },
      options: car.items.map((item) => ({
        icon: item.icon?.url,
        title: item.nome
      }))
    }
  }
}
