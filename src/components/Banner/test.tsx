import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img:
    'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
  title: 'NOVA RANGER 2023',
  subtitle: '<p>V6 TURBODIESEL</p>',
  buttonLabel: 'Ver Mais',
  buttonLink: '/vehicles/nova-ranger'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /nova ranger 2023/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /turbodiesel/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /ova ranger/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
