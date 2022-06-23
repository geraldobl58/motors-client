import Optional, { OptionalProps } from 'components/Optional'

import * as S from './styles'

export type CardOptionalProps = {
  items: OptionalProps[]
}

const CardOptional = ({ items }: CardOptionalProps) => (
  <S.Wrapper>
    {items.length > 0 && (
      <>
        <h1>Opcionais</h1>
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
