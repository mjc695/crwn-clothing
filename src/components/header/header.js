import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
// ReactComponent is a special name that tells create react app that we want a react component that renders an svg instead of the filename

import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

import './header.styles.scss'

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
          currentUser ? <div className='option' onClick={() => auth.signOut()} >
            Sign Out
          </div> :
            <Link className='option' to='/signIn'>Sign In</Link>
        }
        <CartIcon />
      </div>
      {cartHidden ? null : (<CartDropdown />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
