import * as S from './styles'

export type RibbonColors = 'hot' | 'secondary'
export type RibbinSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbinSizes
}

const Ribbon = ({ children, color = 'hot', size = 'normal' }: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
