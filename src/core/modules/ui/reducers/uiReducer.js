import { OPEN_LEFT_PANEL, CLOSE_LEFT_PANEL, CLOSE_RIGHT_PANEL, OPEN_RIGHT_PANEL } from '../constants/uiConstants';

const initialState = {
  isOpenLeftPanel: true,
  isOpenRightPanel: false,
};

const uiReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_LEFT_PANEL:
      return { ...state, isOpenLeftPanel: true };

    case CLOSE_LEFT_PANEL:
      return { ...state, isOpenLeftPanel: false };

    case OPEN_RIGHT_PANEL:
      return { ...state, isOpenRightPanel: true };

    case CLOSE_RIGHT_PANEL:
      return { ...state, isOpenRightPanel: false };

    default:
      return state;
  }
};

export default uiReducer;
