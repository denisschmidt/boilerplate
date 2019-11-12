import { OPEN_NOTIFY, CLOSE_NOTIFY, NOTIFY_TYPES, NOTIFY_SIZES } from '../constants/notifyConstants';

const initialState = {
  isOpen: false,
  type: NOTIFY_TYPES.SUCCESS,
  size: NOTIFY_SIZES.SMALL,
  title: '',
  message: '',
  messageParams: {},
};

const notifyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_NOTIFY:
      return {
        ...state,
        isOpen: true,
        message: payload.message,
        messageParams: payload.messageParams,
        type: payload.type,
        size: payload.size,
        title: payload?.title,
      };
    case CLOSE_NOTIFY:
      return { ...state, isOpen: false, message: '', title: '' };
    default:
      return state;
  }
};

export default notifyReducer;
