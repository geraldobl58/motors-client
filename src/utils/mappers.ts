import {
  QueryHome_banners,
  QueryHome_bestSellers,
  QueryHome_mostWanted,
  QueryHome_recommended
} from 'graphql/generated/QueryHome'
import { formatPrice } from './formattedPrice'

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link
  }))
}

export const recommendedMapper = (
  vehicles: QueryHome_recommended[] | null | undefined
) => {
  return (
    vehicles &&
    vehicles.map((item) => ({
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
  )
}

export const mostSearchedCarsMapper = (
  vehiclesSearch: QueryHome_mostWanted[] | null | undefined
) => {
  return (
    vehiclesSearch &&
    vehiclesSearch.map((item) => ({
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
  )
}

export const bestSellersCarsMapper = (
  vehicleBestSellers: QueryHome_bestSellers[] | null | undefined
) => {
  return (
    vehicleBestSellers &&
    vehicleBestSellers.map((item) => ({
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
  )
}
