import { gql } from '@apollo/client'

export const QUERY_CARS = gql`
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
