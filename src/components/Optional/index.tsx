import * as S from './styles'

export type OptionalProps = {
  title: string
}

const Optional = ({ title }: OptionalProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Optional
