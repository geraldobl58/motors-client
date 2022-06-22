import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Items from '.'

const props = {
  name: 'Airbag'
}

describe('<Items />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Items {...props} />)

    expect(screen.getByRole('heading', { name: props.name }))
  })
})
