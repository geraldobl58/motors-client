import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a primary heading by default', () => {
    renderWithTheme(<Heading>Motors</Heading>)

    expect(screen.getByRole('heading', { name: /motors/i })).toHaveStyle({
      color: '#363636'
    })
  })

  it('should render a secondary heading when color is passed', () => {
    renderWithTheme(<Heading color="secondary">Motors</Heading>)

    expect(screen.getByRole('heading', { name: /motors/i })).toHaveStyle({
      color: '#34ABD0'
    })
  })

  it('should render a secondary heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Motors</Heading>)

    expect(screen.getByRole('heading', { name: /motors/i })).toHaveStyle({
      'border-left': '0.7rem solid #34ABD0'
    })
  })

  it('should render a secondary heading with at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Motors</Heading>)

    expect(screen.getByRole('heading', { name: /motors/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #363636',
      {
        modifier: '::after'
      }
    )
  })
})
