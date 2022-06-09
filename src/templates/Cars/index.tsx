import { Container } from 'components/Container'
import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'

import Base from 'templates/Base'

import * as S from './styles'

export type CarsTemplateProps = {
  singleInfo: SingleInfoProps
}

const Cars = ({ singleInfo }: CarsTemplateProps) => (
  <Base>
    <S.Main>Gallery</S.Main>
    <Container>
      <SingleInfo {...singleInfo} />
    </Container>
  </Base>
)

export default Cars
