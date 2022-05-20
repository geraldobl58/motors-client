import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
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

describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.version })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.fuel })
    ).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByText(props.year)).toBeInTheDocument()
    expect(screen.getByText(props.mileage)).toBeInTheDocument()
    expect(screen.getByText(props.location)).toBeInTheDocument()
  })
})
