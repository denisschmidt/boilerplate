import { map, mapObjIndexed } from 'ramda';

export const createActionType = (...args) => args.reduce((pre, cur) => `${pre}/${cur}`);
export const createActionName = (...args) => args.reduce((pre, cur) => `${pre}_${cur}`);
export const createAction = type => payload => ({
  type,
  payload,
});

export const createActions = map(value => createAction(value));

export const createSelectors = (moduleSelector, initialState) =>
  mapObjIndexed((value, key) => state => moduleSelector(state)?.[key], initialState);
