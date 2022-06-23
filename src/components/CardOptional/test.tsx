import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardOptional from '.'

const props = [
  {
    icon:
      '"https://res.cloudinary.com/dtykejdjn/image/upload/v1656016010/airbag_62c4e74d55.png',
    title: 'Alarme'
  },
  {
    icon:
      'https://res.cloudinary.com/dtykejdjn/image/upload/v1656016010/alarme_cc18c04999.png',
    title: 'Airbag'
  }
]

describe('<CardOptional />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardOptional title="Itens de veículo" items={props} />)
  })
})
