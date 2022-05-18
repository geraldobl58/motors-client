import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullwidth'>

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
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullwidth, hasIcon }) => css`
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #34abd0 0%, #2d8dab 50%);

    cursor: pointer;

    border: 0;
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xxsmall};

    &:hover {
      background: linear-gradient(180deg, #2d8dab 0%, #34abd0 50%);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullwidth && wrapperModifiers.fullwidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
