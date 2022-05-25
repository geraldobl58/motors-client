import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render menu', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /recomendados/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /carros/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /vendidos/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /notícias/i })
    ).toBeInTheDocument()
  })
})
