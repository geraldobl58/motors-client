import { Story, Meta } from '@storybook/react/types-6-0'
import CardItems, { CardItemsProps } from '.'

import items from './mock'

export default {
  title: 'CardItems',
  component: CardItems,
  args: { items }
} as Meta

export const Basic: Story<CardItemsProps> = (args) => <CardItems {...args} />
