import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
// ReactComponent is a special name that tells create react app that we want a react component that renders an svg instead of the filename

import './header.styles.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>

      </div>
    </div>
  )
}

export default Header
