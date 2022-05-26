import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 99%;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const ImageBox = styled.div`
  height: 22rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};

    text-align: center;
  `}
`

export const Info = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    text-transform: uppercase;
  `}
`

export const Version = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
    text-transform: uppercase;
  `}
`

export const Fuel = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
    text-transform: uppercase;
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.primary};
    text-transform: uppercase;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};

    svg {
      width: 2.5rem;
    }
  `}
`

export const BoxInfo = styled.div`
  display: block;

  svg {
    ${({ theme }) => css`
      fill: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.xxsmall};
    `}
  }
`

export const YearTitle = styled.p`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
  `}
`

export const MileageTitle = styled.p`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
  `}
`

export const Location = styled.p`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
