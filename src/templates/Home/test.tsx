import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import cardMock from 'components/CardSlider/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  recommended: cardMock,
  mostSearchedCars: cardMock,
  bestSellersCars: cardMock
}

describe('<Home />', () => {
  it('should render menu', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)

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
