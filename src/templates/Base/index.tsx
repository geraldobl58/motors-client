import { Container } from 'components/Container'

import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    {children}
  </S.Wrapper>
)

export default Base
