import { Story, Meta } from '@storybook/react/types-6-0'
import { CardProps } from 'components/Card'

import CardSlider from '.'

const items = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    img:
      'https://www.autoo.com.br/fotos/2021/11/1280_960/ranger2_26112021_68920_1280_960.jpg',
    title: 'Ford Territory',
    version: '1.5 Ecoboost GTDI',
    fuel: 'Gasolina Sel Automático',
    price: 159.99,
    year: '2021/2022',
    mileage: 14500,
    location: 'São Paulo - SP'
  }
]

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: Story<CardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider items={args} {...args} />
  </div>
)
