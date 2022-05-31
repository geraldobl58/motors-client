import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'

import cardsMock from 'components/CardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Basic.args = {
  title: 'Recomendados para você',
  subtitle: 'Realize seu sonho e encontre seu veículo ideal',
  cards: cardsMock
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  cards: cardsMock
}

export const WithoutSubtitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutSubtitle.args = {
  title: 'Recomendados para você',
  cards: cardsMock
}
