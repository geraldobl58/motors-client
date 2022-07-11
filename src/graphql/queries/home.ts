import { gql } from '@apollo/client'

import { BannerFragment } from 'graphql/fragments/banner'
import { VehicleFragment } from 'graphql/fragments/car'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    recommended: vehicles(where: { destaques: "recomendados" }, limit: 8) {
      ...VehicleFragment
    }

    mostWanted: vehicles(where: { destaques: "buscados" }, limit: 8) {
      ...VehicleFragment
    }

    bestSellers: vehicles(where: { destaques: "vendidos" }, limit: 8) {
      ...VehicleFragment
    }
  }

  ${BannerFragment}
  ${VehicleFragment}
`
