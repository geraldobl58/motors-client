import { Story, Meta } from '@storybook/react/types-6-0'
import CardOptional, { CardOptionalProps } from '.'

import items from './mock'

export default {
  title: 'CardOptional',
  component: CardOptional,
  args: { items }
} as Meta

export const Basic: Story<CardOptionalProps> = (args) => (
  <CardOptional {...args} />
)
