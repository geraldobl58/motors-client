import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import { VehicleCarProfileLtr } from '@styled-icons/fluentui-system-regular/VehicleCarProfileLtr'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'
import { Speedometer } from '@styled-icons/bootstrap/Speedometer'

import * as S from './styles'

export type CardProps = {
  img: string
  title: string
  version: string
  fuel: string
  price: number
  year: string
  mileage: number
  location: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Card = ({
  img,
  title,
  version,
  fuel,
  price,
  year,
  mileage,
  location,
  ribbon,
  ribbonColor = 'hot',
  ribbonSize = 'small'
}: CardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Version>{version}</S.Version>
        <S.Fuel>{fuel}</S.Fuel>
        <S.Price>{price}</S.Price>
        <S.Box>
          <S.BoxInfo>
            <Calendar />
            <S.YearTitle>{year}</S.YearTitle>
          </S.BoxInfo>
          <S.BoxInfo>
            <Speedometer />
            <S.MileageTitle>{mileage}</S.MileageTitle>
          </S.BoxInfo>
        </S.Box>
        <S.Location>{location}</S.Location>
        <Button fullwidth icon={<VehicleCarProfileLtr />} size="medium">
          Ver Mais
        </Button>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default Card
