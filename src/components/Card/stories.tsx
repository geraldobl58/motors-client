import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  },
  argTypes: {
    ribbon: { type: 'string' }
  }
} as Meta

export const Basic: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

export const WithRibbon: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'Lançamento',
  ribbonSize: 'small',
  ribbonColor: 'hot'
}
