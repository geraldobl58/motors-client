import { Story, Meta } from '@storybook/react/types-6-0'
import { VehicleCarProfileLtr } from '@styled-icons/fluentui-system-regular/VehicleCarProfileLtr'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = {
  children: 'Ver Mais'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Ver Mais',
  icon: <VehicleCarProfileLtr />
}
