import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Novidade</Ribbon>)

    expect(screen.getByText(/novidade/i)).toBeInTheDocument()
  })

  it('should render with primary color', () => {
    renderWithTheme(<Ribbon>Novidade</Ribbon>)

    expect(screen.getByText(/novidade/i)).toHaveStyle({
      backgroundColor: '#CC2828'
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Novidade</Ribbon>)

    expect(screen.getByText(/novidade/i)).toHaveStyle({
      backgroundColor: '#34ABD0'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Novidade</Ribbon>)

    expect(screen.getByText(/novidade/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size ', () => {
    renderWithTheme(<Ribbon size="small">Novidade</Ribbon>)

    expect(screen.getByText(/novidade/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
