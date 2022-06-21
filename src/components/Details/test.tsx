import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Details from '.'

const props = {
  make: 'Ford',
  version: '1.5 ECOBOOST GTDI GASOLINA TITANIUM',
  location: 'São Paulo'
}

describe('<Details />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Details {...props} />)

    expect(
      screen.getByRole('heading', { name: /detalhes/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /ford/i })).toBeInTheDocument()
  })
})
