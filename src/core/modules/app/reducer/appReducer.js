import { INIT_APP_FAIL, INIT_APP_START, INIT_APP_SUCCESS } from '../constants/appConstants';

export const initialState = {
  isLoading: true,
  isError: false,
};

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case INIT_APP_START:
      return { ...initialState };
    case INIT_APP_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case INIT_APP_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default appReducer;
