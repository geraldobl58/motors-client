import { gql } from '@apollo/client'

export const QUERY_CARS = gql`
  query QueryVehicles($limit: Int!) {
    vehicles(limit: $limit) {
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

export const QUERY_CAR_BY_SLUG = gql`
  query QueryVehicleBySlug($slug: String!) {
    vehicles(where: { slug: $slug }) {
      gallery {
        url
        label: alternativeText
      }
      titulo
      preco
      ano
      kilometragem
      combustivel
      cambio
      cor
      placa_final
      descricao
      make {
        nome
      }
      version {
        nome
      }
      localization {
        nome
      }
      items {
        icon {
          url
        }
        nome
      }
    }
  }
`
