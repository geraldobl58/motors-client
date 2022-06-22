import { Story, Meta } from '@storybook/react/types-6-0'
import Items, { ItemsProps } from '.'

import item from './mock'

export default {
  title: 'Items',
  component: Items,
  args: { ...item }
} as Meta

export const Basic: Story<ItemsProps> = (args) => <Items {...args} />
