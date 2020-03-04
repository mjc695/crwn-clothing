import React from 'react'

import './collection-preview.styles.scss'
import CollectionItem from './collection-item'

// const CollectionPreview = (item) => {
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title} </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => {
            return idx < 4
          })
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} ></CollectionItem>
            // return <div key={id}>{name} </div>
          })}
      </div>
    </div >
  )
}

export default CollectionPreview
