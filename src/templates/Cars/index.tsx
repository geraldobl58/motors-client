import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { useQueryVehicles } from 'graphql/queries/cars'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import Card from 'components/Card'
import { Grid } from 'components/Grid'

import Base from 'templates/Base'

import { formatPrice } from 'utils/formattedPrice'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'

export type CarsTemplateProps = {
  filterItems: ItemProps[]
}

const CarsTemplate = ({ filterItems }: CarsTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryVehicles({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>Carregando....</p>

  const { vehicles, vehiclesConnection } = data

  const hasMoreGames =
    vehicles.length < (vehiclesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/cars',
      query: items
    })
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 9, start: data?.vehicles.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

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

          {hasMoreGames && (
            <S.ShowMore>
              {loading ? (
                <S.ShowMoreLoading src="/img/dots.svg" />
              ) : (
                <S.ShowMoreButton role="button" onClick={handleShowMore}>
                  <p>Carregar Mais</p>
                  <ArrowDown size={35} />
                </S.ShowMoreButton>
              )}
            </S.ShowMore>
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default CarsTemplate
