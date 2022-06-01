import styled, { css } from 'styled-components'

export const Sections = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};
  `}
`
