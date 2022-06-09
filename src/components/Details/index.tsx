import Heading from 'components/Heading'

import * as S from './styles'

export type DetailsProps = {
  make: string
  version: string
  location: string
}

const Details = ({ make, version, location }: DetailsProps) => (
  <S.Wrapper>
    <Heading color="primary">Detalhes</Heading>

    <S.Inset>
      <S.Container>
        <S.Title>Marca</S.Title>
        <S.Content>{make}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Versão</S.Title>
        <S.Content>{version}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Local</S.Title>
        <S.Content>{location}</S.Content>
      </S.Container>
    </S.Inset>
  </S.Wrapper>
)

export default Details
