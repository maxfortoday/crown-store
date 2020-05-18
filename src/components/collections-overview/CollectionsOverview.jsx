import React from 'react';
import './CollectionsOverview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop-selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';

const CollectionsOverview = ({collections}) => {
 return (
  <div className="collections-overview">
    {
     collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
     ))
    }
  </div>
 )
}

const mapStateToProps = createStructuredSelector({
 collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
