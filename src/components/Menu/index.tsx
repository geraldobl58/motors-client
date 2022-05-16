import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material/FavoriteBorder'

import Logo from 'components/Logo'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <FavoriteBorderIcon aria-label="Favorite" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
