import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'NOVA RANGER 2023',
    subtitle: '<p>V6 TURBODIESEL</p>',
    buttonLabel: 'Ver Mais',
    buttonLink: '/vehicles/nova-ranger'
  }
} as Meta

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />
