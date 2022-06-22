import * as S from './styles'

import Items, { ItemsProps } from 'components/Items'
import Heading from 'components/Heading'

export type CardItemsProps = {
  title: string
  items: ItemsProps[]
}

const CardItems = ({ title, items }: CardItemsProps) => {
  return (
    <S.Wrapper>
      {items.length > 0 && (
        <>
          <Heading lineLeft>{title}</Heading>
          <S.Content>
            {items.map((item, index) => (
              <Items key={index} {...item} />
            ))}
          </S.Content>
        </>
      )}
    </S.Wrapper>
  )
}

export default CardItems
