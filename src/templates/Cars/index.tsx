import { CardProps } from 'components/Card'
import * as S from './styles'

export type CarsTemplateProps = {
  cars?: CardProps[]
}

const CarsTemplate = ({ cars = [] }: CarsTemplateProps) => (
  <S.Wrapper>
    <h1>Cars</h1>
  </S.Wrapper>
)

export default CarsTemplate
