import { Story, Meta } from '@storybook/react/types-6-0'
import Details, { DetailsProps } from '.'

import item from './mock'

export default {
  title: 'Details',
  component: Details,
  args: item
} as Meta

export const Basic: Story<DetailsProps> = (args) => <Details {...args} />
