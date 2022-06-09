import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    margin-top: -${theme.spacings.xxlarge};
    z-index: 9;
    position: relative;
  `}
`

export const Sections = styled.div``
