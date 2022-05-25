import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardSlider from '.'

const items = [
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  }
]

describe('<CardSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<CardSlider items={items} color="secondary" />)

    expect(screen.getByLabelText(/anterior/i)).toHaveStyle({
      color: '#34ABD0'
    })
    expect(screen.getByLabelText(/proximo/i)).toHaveStyle({
      color: '#34ABD0'
    })
  })
})
