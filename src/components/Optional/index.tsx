import * as S from './styles'

export type OptionalProps = {
  title: string
  icon?: string
}

const Optional = ({ title, icon }: OptionalProps) => (
  <S.Container>
    <S.Content>
      <S.Image>
        <img src={icon} alt={title} />
      </S.Image>
      <S.Title>{title}</S.Title>
    </S.Content>
  </S.Container>
)

export default Optional
