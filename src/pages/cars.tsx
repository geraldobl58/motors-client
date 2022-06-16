import CarsTemplate, { CarsTemplateProps } from 'templates/Cars'

import filterItemMock from 'components/ExploreSidebar/mock'
import carsMock from 'components/CardSlider/mock'

export default function Index(props: CarsTemplateProps) {
  return <CarsTemplate {...props} />
}

export function getStaticProps() {
  return {
    props: {
      cars: carsMock,
      filterItems: filterItemMock
    }
  }
}
