import { SET_MODAL_STATUS } from "./Type";

const initialState = {
  isModalOpen: false,
  selectedItemId: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_STATUS:
      return {
        ...state,
        isModalOpen: action.data.isOpen,
        selectedItemId: action.data.id,
      };

    default:
      return state;
  }
};
