import Heading from 'components/Heading'
import Optional, { OptionalProps } from 'components/Optional'

import * as S from './styles'

export type CardOptionalProps = {
  title: string
  items: OptionalProps[]
}

const CardOptional = ({ title, items }: CardOptionalProps) => (
  <S.Wrapper>
    {items.length > 0 && (
      <>
        <Heading color="primary">{title}</Heading>
        <S.Content>
          {items.map((item, index) => (
            <Optional key={index} {...item} />
          ))}
        </S.Content>
      </>
    )}
  </S.Wrapper>
)

export default CardOptional
