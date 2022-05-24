import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSlideProps } from '.'

const items = [
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Nova Ranger',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger/'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Nova Ranger',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger/'
  },
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Nova Ranger',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger/'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: Story<BannerSlideProps> = (args) => (
  <BannerSlider {...args} />
)
