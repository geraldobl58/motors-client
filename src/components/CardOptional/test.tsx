import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardOptional from '.'

const props = [
  {
    title: 'Alarme'
  },
  {
    title: 'Airbag'
  }
]

describe('<CardOptional />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardOptional items={props} />)
  })
})
