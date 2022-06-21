import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

import cardsMock from 'components/CardSlider/mock'

const props = {
  title: 'Recomendados',
  subtitle: 'Realize seu sonho e encontre seu veículo ideal',
  cards: cardsMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
  })
})
