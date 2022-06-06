import Heading from 'components/Heading'

import formattedNumber from 'utils/format-number'
import formatPrice from 'utils/format-price'

import * as S from './styles'

export type SingleInfoProps = {
  title: string
  year: string
  milage: number
  fuel: string
  exchange: string
  color: string
  endOfPlate: number
  price: number
  description: string
}

const SingleInfo = ({
  title,
  year,
  milage,
  fuel,
  exchange,
  color,
  endOfPlate,
  price,
  description
}: SingleInfoProps) => (
  <S.Wrapper>
    <S.Header>
      <Heading color="primary">{title}</Heading>
      <S.Price>{formatPrice(price)}</S.Price>
    </S.Header>

    <S.Inset>
      <S.Container>
        <S.Title>Ano</S.Title>
        <S.Content>{year}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>KM</S.Title>
        <S.Content>{formattedNumber(milage)}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Combustível</S.Title>
        <S.Content>{fuel}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Câmbio</S.Title>
        <S.Content>{exchange}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Cor</S.Title>
        <S.Content>{color}</S.Content>
      </S.Container>
      <S.Container>
        <S.Title>Final de placa</S.Title>
        <S.Content>{endOfPlate}</S.Content>
      </S.Container>
    </S.Inset>

    <S.About>
      <S.Title>Sobre este carro</S.Title>
      <S.Description>{description}</S.Description>
    </S.About>
  </S.Wrapper>
)

export default SingleInfo
