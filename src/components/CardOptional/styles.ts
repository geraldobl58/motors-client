import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  display: flex;
  margin-top: 1.6rem;
`
