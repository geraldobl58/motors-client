import * as S from './styles'

export type RibbonColors = 'hot' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({ children, color = 'hot', size = 'normal' }: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
