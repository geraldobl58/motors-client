import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullwidth'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullwidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullwidth }) => css`
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #34abd0 0%, #2d8dab 50%);

    border: 0;
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullwidth && wrapperModifiers.fullwidth()}
  `}
`
