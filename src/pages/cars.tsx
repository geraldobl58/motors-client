import CarsTemplate, { CarsTemplateProps } from 'templates/Cars'

export default function Index(props: CarsTemplateProps) {
  return <CarsTemplate {...props} />
}

export function getStaticProps() {
  return {
    props: {
      cars: []
    }
  }
}
