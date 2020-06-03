import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
 type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
 type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
 payload: collectionsMap
})

export const fatchCollectionFailure = (errorMessage) => ({
 type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
 payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
 return dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionStart())

  collectionRef.get().then(snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch(fetchCollectionSuccess(collectionsMap));
    this.setState({loading: false})
  }).catch(error => dispatch(fatchCollectionFailure(error.message)));
 }
}