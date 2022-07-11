import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { formatPrice } from 'utils/formattedPrice'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, recommended, mostWanted, bestSellers }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link
      })),
      recommended: recommended.map((item) => ({
        img: item.cover?.url,
        make: item.make?.nome,
        slug: item.slug,
        title: item.titulo,
        version: item.version?.nome,
        fuel: item.combustivel,
        exchange: item.cambio,
        price: formatPrice(item.preco),
        year: item.ano,
        mileage: item.kilometragem?.toFixed(3),
        location: item.localization?.nome
      })),
      mostSearchedCars: mostWanted.map((item) => ({
        img: item.cover?.url,
        make: item.make?.nome,
        slug: item.slug,
        title: item.titulo,
        version: item.version?.nome,
        fuel: item.combustivel,
        exchange: item.cambio,
        price: formatPrice(item.preco),
        year: item.ano,
        mileage: item.kilometragem?.toFixed(3),
        location: item.localization?.nome
      })),
      bestSellersCars: bestSellers.map((item) => ({
        img: item.cover?.url,
        make: item.make?.nome,
        slug: item.slug,
        title: item.titulo,
        version: item.version?.nome,
        fuel: item.combustivel,
        exchange: item.cambio,
        price: formatPrice(item.preco),
        year: item.ano,
        mileage: item.kilometragem?.toFixed(3),
        location: item.localization?.nome
      }))
    }
  }
}
