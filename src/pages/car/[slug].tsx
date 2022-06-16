import Car, { CarTemplateProps } from 'templates/Car'

import galleryMock from 'components/Gallery/mock'

export default function Index(props: CarTemplateProps) {
  return <Car {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'territory' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      singleInfo: {
        title: 'Territory',
        year: '2020/2021',
        milage: 25000,
        fuel: 'Gasolina',
        exchange: 'Manual',
        color: 'Branco',
        endOfPlate: 5,
        price: 198900,
        description: 'Mussum Ipsum, cacilds vidis litro abertis.'
      },
      gallery: galleryMock,
      details: {
        make: 'Ford',
        version: '1.5 ECOBOOST GTDI GASOLINA TITANIUM',
        location: 'São Paulo'
      }
    }
  }
}
