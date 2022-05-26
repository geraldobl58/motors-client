import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSlideProps } from '.'

import items from './mock'

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
