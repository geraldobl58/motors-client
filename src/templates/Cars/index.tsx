import { useQueryVehicles } from 'graphql/queries/cars'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import Card, { CardProps } from 'components/Card'
import { Grid } from 'components/Grid'

import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'
import { formatPrice } from 'utils/formattedPrice'

export type CarsTemplateProps = {
  cars?: CardProps[]
  filterItems: ItemProps[]
}

const CarsTemplate = ({ filterItems }: CarsTemplateProps) => {
  const { data, loading, fetchMore } = useQueryVehicles({
    variables: { limit: 9 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 9, start: data?.vehicles.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <section>
            <Grid>
              {data?.vehicles.map((item) => (
                <Card
                  key={item.titulo}
                  slug={item.slug}
                  img={item.cover!.url}
                  title={item.titulo}
                  make={item.make?.nome}
                  fuel={item.combustivel}
                  exchange={item.cambio}
                  price={formatPrice(item.preco)}
                  year={item.ano}
                  mileage={item.kilometragem?.toFixed(3)}
                  location={item.localization?.nome}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Carregar Mais</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default CarsTemplate
