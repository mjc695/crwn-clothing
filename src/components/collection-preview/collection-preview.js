import React from 'react'

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title} </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => {
            return idx < 4
          })
          .map((item) => {
            return <CollectionItem key={item.id} item={item} ></CollectionItem>
          })}
      </div>
    </div >
  )
}

export default CollectionPreview
