import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBar.elements'


const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              YUI
            </NavLogo>
            <MobileIcon
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Products">
                  Products
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
