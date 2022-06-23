import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacings.xxlarge};
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${theme.colors.grayLight};
    border-radius: 0.4rem;
    margin-bottom: 1rem;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
  `}
`
