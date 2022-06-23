import { Story, Meta } from '@storybook/react/types-6-0'
import Optional, { OptionalProps } from '.'

import item from './mock'

export default {
  title: 'Optional',
  component: Optional,
  args: { ...item }
} as Meta

export const Basic: Story<OptionalProps> = (args) => <Optional {...args} />
