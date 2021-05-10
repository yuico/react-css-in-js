import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon } from './NavBar.elements'


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
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar
