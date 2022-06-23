import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Optional from '.'

const props = {
  title: 'Alarme'
}

describe('<Optional />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Optional {...props} />)

    expect(screen.getByRole('heading', { name: props.title }))
  })
})
