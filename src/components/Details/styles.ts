import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
  `}
`

export const Inset = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    align-items: center;

    margin-top: ${theme.spacings.large};
  `}
`

export const Title = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Content = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
  `}
`
