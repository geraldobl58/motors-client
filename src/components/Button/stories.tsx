import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = {
  children: 'Ver Mais'
}
