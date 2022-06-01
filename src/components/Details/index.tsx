import Heading from 'components/Heading'

import * as S from './styles'

const Details = () => (
  <S.Wrapper>
    <Heading color="primary">Detalhes</Heading>

    <S.Inset>
      <S.Container>
        <S.Title>Marca</S.Title>
        <S.Content>Ford</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Versão</S.Title>
        <S.Content>1.6 Titanium</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Local</S.Title>
        <S.Content>São Paulo</S.Content>
      </S.Container>
    </S.Inset>
  </S.Wrapper>
)

export default Details
