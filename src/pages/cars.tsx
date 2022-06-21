import CarsTemplate, { CarsTemplateProps } from 'templates/Cars'

import { gql } from '@apollo/client'

import { initializeApollo } from 'utils/apollo'
import { formatPrice } from 'utils/formattedPrice'

import filterItemMock from 'components/ExploreSidebar/mock'

export default function Index(props: CarsTemplateProps) {
  return <CarsTemplate {...props} />
}

export async function getStaticProps() {
  const apollotClient = initializeApollo()

  const { data } = await apollotClient.query({
    query: gql`
      query QueryVehicles {
        vehicles {
          make {
            nome
          }
          titulo
          slug
          cover {
            url
          }
          version {
            nome
          }
          combustivel
          cambio
          preco
          ano
          kilometragem
          localization {
            nome
          }
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      cars: data.vehicles.map((item) => ({
        img: item.cover.url,
        make: item.make.nome,
        title: item.titulo,
        version: item.version.nome,
        fuel: item.combustivel,
        exchange: item.cambio,
        price: formatPrice(item.preco),
        year: item.ano,
        mileage: item.kilometragem.toFixed(3),
        location: item.localization.nome
      })),
      filterItems: filterItemMock
    }
  }
}
