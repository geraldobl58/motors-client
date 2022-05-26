import styled, { css } from 'styled-components'

export const Sections = styled.div`
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
