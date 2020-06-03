import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {
 fetchCollectionSuccess,
 fatchCollectionFailure
} from './shop.actions';
 
export function* fetchCollectionAsync() {
 try {
  const collectionRef = firestore.collection('collections');
  const snapshot = yield collectionRef.get();
  const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
  yield put(fetchCollectionSuccess(collectionsMap))
 } catch (error) {
  yield put(fatchCollectionFailure(error.message))
 }
};

export function* fetchCollectionStart() {
 yield takeLatest(
  ShopActionTypes.FETCH_COLLECTION_START,
  fetchCollectionAsync
 )
}

export function* shopSaga() {
 yield all([
  call(fetchCollectionStart)
 ])
}