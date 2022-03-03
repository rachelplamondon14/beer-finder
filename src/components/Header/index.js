import React from 'react'

//Styles
import './style.css'

//Components
import Logo from '../Logo'
import Search from '../Search'
import Tagline from '../Tagline'

const Header = () => (
  <header>
    <div className="center">
      <Logo />
      <Tagline />
    </div>
    <Search />
  </header>
)

export default Header