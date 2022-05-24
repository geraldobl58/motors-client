import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type BannerSlideProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  infinite: false
}

const BannerSlider = ({ items }: BannerSlideProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
