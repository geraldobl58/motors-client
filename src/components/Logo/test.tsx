import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a primary label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/motors/i).parentElement).toHaveStyle({
      color: '#363636'
    })
  })

  it('should render a secondary label when color is passed', () => {
    renderWithTheme(<Logo color="secondary" />)

    expect(screen.getByLabelText(/motors/i).parentElement).toHaveStyle({
      color: '#34ABD0'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/motors/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/motors/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
