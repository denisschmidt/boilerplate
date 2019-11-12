import { OPEN_CENTRAL_MODAL, CLOSE_CENTRAL_MODAL } from '../constants/modalConstants';

const initialState = {
  modalId: null,
  params: {},
  isOpen: false,
};

const centralModalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_CENTRAL_MODAL:
      return { ...state, isOpen: true, modalId: payload.modalId, params: payload.params };
    case CLOSE_CENTRAL_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default centralModalReducer;
