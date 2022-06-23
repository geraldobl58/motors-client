import Base from 'templates/Base'

import { Container } from 'components/Container'

import Details, { DetailsProps } from 'components/Details'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import SingleInfo, { SingleInfoProps } from 'components/SingleInfo'

import * as S from './styles'

import { OptionalProps } from 'components/Optional'
import CardOptional from 'components/CardOptional'

export type CarTemplateProps = {
  singleInfo: SingleInfoProps
  gallery?: GalleryImageProps[]
  details: DetailsProps
  options: OptionalProps[]
}

const Cars = ({ singleInfo, gallery, details, options }: CarTemplateProps) => (
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

      <S.Separator />
      <S.Sections>
        <CardOptional title="Itens de veículo" items={options} />
      </S.Sections>
    </Container>
  </Base>
)

export default Cars
