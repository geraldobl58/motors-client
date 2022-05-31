import { Container } from 'components/Container'
import { CardProps } from 'components/Card'

import Heading from 'components/Heading'
import CardSlider from 'components/CardSlider'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  subtitle?: string
  cards?: CardProps[]
}

const Showcase = ({ title, subtitle, cards }: ShowcaseProps) => (
  <S.Wrapper>
    <Container>
      {!!title && <Heading lineLeft>{title}</Heading>}
      {!!subtitle && <S.Separator>{subtitle}</S.Separator>}
      {!!cards && <CardSlider items={cards} />}
    </Container>
  </S.Wrapper>
)

export default Showcase
