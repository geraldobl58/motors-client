import styled, { css } from 'styled-components'

export const Main = styled.div``

export const Info = styled.div`
  ${({ theme }) => css`
    margin-top: -${theme.spacings.xxlarge};
    z-index: 9;
    position: relative;
  `}
`

export const Sections = styled.div``
