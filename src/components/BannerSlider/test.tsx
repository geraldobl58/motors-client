import 'match-media-mock'
import { screen } from '@testing-library/react'

import BannerSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Nova Ranger 1',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger/'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Nova Ranger 2',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger/'
  }
]

describe('<BannerSlider />', () => {
  it('should render horizontal slide', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-slider')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /nova ranger 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /nova ranger 2/i, hidden: true })
    ).toBeInTheDocument()
  })
})
