import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { VehicleCarProfileLtr } from '@styled-icons/fluentui-system-regular/VehicleCarProfileLtr'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Ver Mais</Button>)

    expect(screen.getByRole('button', { name: /Ver Mais/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Ver Mais</Button>)

    expect(screen.getByRole('button', { name: /Ver Mais/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Ver Mais</Button>)

    expect(screen.getByRole('button', { name: /Ver Mais/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullwidth version ', () => {
    renderWithTheme(<Button fullwidth>Ver Mais</Button>)

    expect(screen.getByRole('button', { name: /Ver Mais/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<VehicleCarProfileLtr data-testid="icon" />}>
        Ver Mais
      </Button>
    )

    expect(screen.getByText(/Ver Mais/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Ver Mais
      </Button>
    )

    expect(screen.getByRole('link', { name: /ver mais/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
