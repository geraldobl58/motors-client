import { gql } from '@apollo/client'

export const VehicleFragment = gql`
  fragment VehicleFragment on Vehicle {
    cover {
      url
    }
    make {
      nome
    }
    slug
    titulo
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
`
