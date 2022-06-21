import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SingleInfo from '.'

const props = {
  title: 'Territory',
  year: '2020/2021',
  milage: 2500,
  fuel: 'Gasolina',
  exchange: 'Manual',
  color: 'Branco',
  endOfPlate: 5,
  price: 198900,
  description: 'Mussum Ipsum, cacilds vidis litro abertis.'
}

describe('<SingleInfo />', () => {
  it('should render single information', () => {
    const { container } = renderWithTheme(<SingleInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /territory/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/2500/i)).toBeInTheDocument()

    expect(screen.getByText(/gasolina/i)).toBeInTheDocument()

    expect(screen.getByText(/manual/i)).toBeInTheDocument()

    expect(screen.getByText(/branco/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
