import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cars from '.'

describe('<Cars />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Cars />)

    expect(screen.getByRole('heading', { name: /Cars/i })).toBeInTheDocument()
  })
})
