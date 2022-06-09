import Cars, { CarsTemplateProps } from 'templates/Cars'

export default function Index(props: CarsTemplateProps) {
  return <Cars {...props} />
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
      }
    }
  }
}
