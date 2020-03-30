import React from 'react'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-items/menu-item'
import './directory.styles.scss'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...restOfProps }) => { // able to destructure from map and makes it much easier
        return <MenuItem key={id} {...restOfProps}></MenuItem> // key put here because of multiple MenuItems
      })}
    </div>
  )
}

const mapState = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapState)(Directory)
