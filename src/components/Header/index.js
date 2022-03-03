import React from 'react'

//Styles
import './style.css'

//Components
import Logo from '../Logo'
import Search from '../Search'
import Tagline from '../Tagline'

const Header = () => (
  <header>
    <Logo />
    <Tagline />
    <Search />
  </header>
)

export default Header