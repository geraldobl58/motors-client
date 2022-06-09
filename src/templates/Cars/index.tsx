import { Container } from 'components/Container'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'

import Base from 'templates/Base'

import * as S from './styles'

export type CarsTemplateProps = {
  singleInfo: SingleInfoProps
  gallery?: GalleryImageProps[]
}

const Cars = ({ singleInfo, gallery }: CarsTemplateProps) => (
  <Base>
    <S.Main>
      <S.Sections>{!!gallery && <Gallery items={gallery} />}</S.Sections>
    </S.Main>
    <Container>
      <S.Info>
        <SingleInfo {...singleInfo} />
      </S.Info>
    </Container>
  </Base>
)

export default Cars
