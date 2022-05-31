import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    margin-left: ${theme.spacings.xsmall};
  `}
`
