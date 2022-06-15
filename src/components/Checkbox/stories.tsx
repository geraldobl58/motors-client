import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Ford"
        labelFor="ford"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Renault"
        labelFor="renault"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Citroen"
        labelFor="citroen"
        isChecked
        {...args}
      />
    </div>
  </>
)
