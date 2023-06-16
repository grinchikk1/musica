import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  LOAD_CART,
  SAVE_CART_DATA,
} from "./Type";

const savedCart = localStorage.getItem("cart");
const initialState = savedCart ? JSON.parse(savedCart) : [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return [...state];

    case ADD_TO_CART:
      return [...state, action.data];

    case SAVE_CART_DATA:
      return [...action.data];

    case DELETE_FROM_CART:
      return state.filter((card) => card.id !== action.data.id);

    default:
      return state;
  }
};
