export default [
  {
    title: 'Ordenar',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'Maior Valor',
        name: 'high-to-low'
      },
      {
        label: 'Menor Valor',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Preço',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Abaixo de R$200',
        name: 'under-200'
      },
      {
        label: 'Abaixo de R$300',
        name: 'under-300'
      },
      {
        label: 'Abaixo de R$400',
        name: 'under-400'
      },
      {
        label: 'Abaixo de R$500',
        name: 'under-500'
      },
      {
        label: 'Abaixo de R$600',
        name: 'under-600'
      }
    ]
  },
  {
    title: 'Categoria',
    name: 'category',
    type: 'checkbox',
    fields: [
      {
        label: 'Ford',
        name: 'ford'
      },
      {
        label: 'Fiat',
        name: 'fiat'
      }
    ]
  },
  {
    title: 'Localidade',
    name: 'location',
    type: 'checkbox',
    fields: [
      {
        label: 'Minas Gerais',
        name: 'minas-gerais'
      },
      {
        label: 'Santa Catarina',
        name: 'santa-catarina'
      }
    ]
  }
]
