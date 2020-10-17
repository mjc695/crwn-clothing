import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionOverview from '../../components/collections-overview/collection-overview'

import CollectionPage from '../../pages/collection/collection'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      console.log('collection map', collectionsMap)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }

}
const mapDispatch = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatch)(ShopPage)
