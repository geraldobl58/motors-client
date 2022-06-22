import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardItems from '.'

const items = [
  {
    name: 'Airbag'
  },
  {
    name: 'Alarme'
  }
]

describe('<CardItems />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardItems title="Itens de veículo" items={items} />)
  })
})
