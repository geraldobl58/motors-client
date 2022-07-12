import { gql, QueryHookOptions, useQuery } from '@apollo/client'

import {
  QueryVehicles,
  QueryVehiclesVariables
} from 'graphql/generated/QueryVehicles'

export const QUERY_CARS = gql`
  query QueryVehicles($limit: Int!, $start: Int) {
    vehicles(limit: $limit, start: $start) {
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

export function useQueryVehicles(
  options?: QueryHookOptions<QueryVehicles, QueryVehiclesVariables>
) {
  return useQuery<QueryVehicles, QueryVehiclesVariables>(QUERY_CARS, options)
}
