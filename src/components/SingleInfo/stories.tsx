import { Story, Meta } from '@storybook/react/types-6-0'
import SingleInfo, { SingleInfoProps } from '.'

import mock from './mock'

export default {
  title: 'SingleInfo',
  component: SingleInfo,
  args: mock
} as Meta

export const Basic: Story<SingleInfoProps> = (args) => <SingleInfo {...args} />
