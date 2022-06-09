import Base from 'templates/Base'

import { Container } from 'components/Container'

import Details, { DetailsProps } from 'components/Details'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'

import * as S from './styles'

export type CarsTemplateProps = {
  singleInfo: SingleInfoProps
  gallery?: GalleryImageProps[]
  details: DetailsProps
}

const Cars = ({ singleInfo, gallery, details }: CarsTemplateProps) => (
  <Base>
    <S.Main>
      <S.Sections>{!!gallery && <Gallery items={gallery} />}</S.Sections>
    </S.Main>
    <Container>
      <S.Info>
        <S.Sections>
          <SingleInfo {...singleInfo} />
        </S.Sections>
      </S.Info>
      <S.Separator />
      <S.Sections>
        <Details {...details} />
      </S.Sections>
    </Container>
  </Base>
)

export default Cars
