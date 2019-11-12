import { path, compose, map, pathOr } from 'ramda';
import { call, put, takeEvery, select } from 'redux-saga/effects';

import { GET_UTILITY_DATA_START, LOAD_MORE_UTILITY_ITEMS_REQUEST } from '../constants/utilityDataConstants';
import {
  createUtilityDataFailActions,
  createUtilityDataSuccessActions,
  createUtilityLoadMoreFailAction,
  createUtilityLoadMoreStartAction,
  createUtilityLoadMoreSuccessAction,
} from './actionUtils';
import { createUtilityDataSelectors } from './selectorUtils';

export const createGetEntitySaga = (entityName, pathToServerData, getDataApi) =>
  function* getUtilityEntitySaga() {
    try {
      const data = yield call(getDataApi);
      const payload = path(pathToServerData, data);
      yield put(createUtilityDataSuccessActions(entityName)(payload));
    } catch (e) {
      yield put(createUtilityDataFailActions(entityName)());
    }
  };

export const createLoadMoreEntitySaga = ({ entityName, pathToServerData, api, mapper }) =>
  function* getUtilityEntitySaga(action) {
    try {
      const payload = action?.payload;

      const selectors = createUtilityDataSelectors(entityName);
      const isLoaded = yield select(selectors.isLoadedSelector);
      const isLoading = yield select(selectors.isLoadingSelector);
      const offset = yield select(selectors.offset);
      const limit = yield select(selectors.limit);

      if (isLoaded || isLoading) return;

      yield put(createUtilityLoadMoreStartAction(entityName)());

      const data = yield call(api, payload, { limit, offset });

      const count = pathOr(0, ['data', 'listInfo', 'count'])(data);

      const items = compose(
        map(mapper),
        path(pathToServerData),
      )(data);

      yield put(
        createUtilityLoadMoreSuccessAction(entityName)({
          count,
          [entityName]: items,
          offset: offset + limit,
          isLoaded: items.length < limit,
        }),
      );
    } catch (e) {
      yield put(createUtilityLoadMoreFailAction(entityName)());
    }
  };

export const createUtilityDataWatcher = (entityName, pathToServerData, getDataApi) =>
  function* utilityDataWatcher() {
    yield takeEvery(
      `@@${entityName}/${GET_UTILITY_DATA_START}`,
      createGetEntitySaga(entityName, pathToServerData, getDataApi),
    );
  };

export const createUtilityLoadMoreWatcher = ({ entityName, ...restProps }) =>
  function* utilityDataWatcher() {
    yield takeEvery(
      `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_REQUEST}`,
      createLoadMoreEntitySaga({ entityName, ...restProps }),
    );
  };
