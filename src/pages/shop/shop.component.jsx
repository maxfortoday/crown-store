import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import collectionPageContainer from '../collection/collection.container';
import {fetchCollectionStart} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  componentDidMount() {
    const {fetchCollectionStart} = this.props;
    fetchCollectionStart()
  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);