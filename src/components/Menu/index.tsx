import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material/FavoriteBorder'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <S.MenuLink href="#">Home</S.MenuLink>
            <S.MenuLink href="#">Sobre</S.MenuLink>
            <S.MenuLink href="#">Veículos</S.MenuLink>
            <S.MenuLink href="#">Faq</S.MenuLink>
            <S.MenuLink href="#">Contato</S.MenuLink>
          </S.MenuNav>
        </MediaMatch>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <FavoriteBorderIcon aria-label="Favorite" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
          <S.MenuLink href="#">Veículos</S.MenuLink>
          <S.MenuLink href="#">Faq</S.MenuLink>
          <S.MenuLink href="#">Contato</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
