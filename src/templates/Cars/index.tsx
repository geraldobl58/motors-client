import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import Card, { CardProps } from 'components/Card'

import { Grid } from 'components/Grid'

import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'

export type CarsTemplateProps = {
  cars?: CardProps[]
  filterItems: ItemProps[]
}

const CarsTemplate = ({ cars = [], filterItems }: CarsTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />

      <section>
        <Grid>
          {cars.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Carregar Mais</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default CarsTemplate
