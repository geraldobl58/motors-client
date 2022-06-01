import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Details from '.'

describe('<Details />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Details />)

    expect(
      screen.getByRole('heading', { name: /Details/i })
    ).toBeInTheDocument()
  })
})
