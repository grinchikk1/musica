import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./Type";

const initialState = {
  data: [],
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
      return state;
  }
};
