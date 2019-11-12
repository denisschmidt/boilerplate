import {
  CLEAR_UTILITY_DATA,
  GET_UTILITY_DATA_FAIL,
  GET_UTILITY_DATA_START,
  GET_UTILITY_DATA_SUCCESS,
  LOAD_MORE_UTILITY_ITEMS_FAIL,
  LOAD_MORE_UTILITY_ITEMS_START,
  LOAD_MORE_UTILITY_ITEMS_SUCCESS,
} from '../constants/utilityDataConstants';

export const createInitialState = entityName => ({
  [entityName]: [],
  count: 0,
  offset: 0,
  limit: 20,
  isLoading: false,
  isLoaded: false,
  isError: false,
});

export const createUtilityDataReducer = entityName => (state = createInitialState(entityName), { type, payload }) => {
  switch (type) {
    case `@@${entityName}/${GET_UTILITY_DATA_START}`:
    case `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_START}`:
      return { ...state, isLoading: true, isError: false };

    case `@@${entityName}/${GET_UTILITY_DATA_SUCCESS}`:
      return { ...state, [entityName]: payload, isLoading: false, isLoaded: true, isError: false };

    case `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        isLoaded: payload.isLoaded,
        offset: payload.offset,
        count: payload.count,
        [entityName]: [...state[entityName], ...payload[entityName]],
      };

    case `@@${entityName}/${LOAD_MORE_UTILITY_ITEMS_FAIL}`:
    case `@@${entityName}/${GET_UTILITY_DATA_FAIL}`:
      return { ...state, isLoading: false, isError: true };

    case `@@${entityName}/${CLEAR_UTILITY_DATA}`:
      return { ...createInitialState(entityName) };

    default:
      return state;
  }
};
