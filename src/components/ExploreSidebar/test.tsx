import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(
      screen.getByRole('heading', { name: /ordenar/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /preço/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /categoria/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /localidade/i })
    ).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(
      screen.getByRole('checkbox', { name: /Até 200/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Menor Valor/i })
    ).toBeInTheDocument()
  })

  it('should render button filter', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()
  })
})
