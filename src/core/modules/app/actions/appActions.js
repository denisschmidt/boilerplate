import { INIT_APP_START, INIT_APP_SUCCESS, INIT_APP_FAIL } from '../constants/appConstants';

export const initAppStart = () => ({
  type: INIT_APP_START,
});

export const initAppSuccess = () => ({
  type: INIT_APP_SUCCESS,
});

export const initAppFail = () => ({
  type: INIT_APP_FAIL,
});
