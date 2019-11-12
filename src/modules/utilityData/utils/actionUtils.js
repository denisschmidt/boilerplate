import {
  CLEAR_UTILITY_DATA,
  GET_UTILITY_DATA_FAIL,
  GET_UTILITY_DATA_START,
  GET_UTILITY_DATA_SUCCESS,
  LOAD_MORE_UTILITY_ITEMS_FAIL,
  LOAD_MORE_UTILITY_ITEMS_REQUEST,
  LOAD_MORE_UTILITY_ITEMS_START,
  LOAD_MORE_UTILITY_ITEMS_SUCCESS,
} from '../constants/utilityDataConstants';

// load all
export const createUtilityDataStartActions = entityName => payload => ({
  type: `@@${entityName}/${GET_UTILITY_DATA_START}`,
  payload,
});

export const createUtilityDataSuccessActions = entityName => data => ({
  type: `@@${entityName}/${GET_UTILITY_DATA_SUCCESS}`,
  payload: data,
});

export const createUtilityDataFailActions = entityName => () => ({
  type: `@@${entityName}/${GET_UTILITY_DATA_FAIL}`,
});

// load more actions
export const createUtilityLoadMoreRequestAction = entityName => payload => ({
  type: `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_REQUEST}`,
  payload,
});

export const createUtilityLoadMoreStartAction = entityName => () => ({
  type: `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_START}`,
});

export const createUtilityLoadMoreSuccessAction = entityName => data => ({
  type: `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_SUCCESS}`,
  payload: data,
});

export const createUtilityLoadMoreFailAction = entityName => () => ({
  type: `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_FAIL}`,
});

// clear
export const createUtilityDataClearActions = entityName => () => ({
  type: `@@${entityName}/${CLEAR_UTILITY_DATA}`,
});
