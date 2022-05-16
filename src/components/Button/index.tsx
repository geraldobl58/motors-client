import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullwidth?: boolean
}

const Button = ({
  children,
  size = 'medium',
  fullwidth = false
}: ButtonProps) => (
  <S.Wrapper size={size} fullwidth={fullwidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
