import * as S from './styles'

export type ItemsProps = {
  name: string
}

const Items = ({ name }: ItemsProps) => (
  <S.Wrapper>
    <S.Title>{name}</S.Title>
  </S.Wrapper>
)

export default Items
