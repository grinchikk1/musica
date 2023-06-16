import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SAVE_FAVORITES_DATA,
  LOAD_FAVORITES,
} from "./Type";

const savedFavorites = localStorage.getItem("favorites");
const initialState = savedFavorites ? JSON.parse(savedFavorites) : [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (state.some((card) => card.id === action.data.id)) {
        return state;
      } else {
        return [...state, action.data];
      }

    case SAVE_FAVORITES_DATA:
      return action.data;

    case LOAD_FAVORITES:
      return state;

    case REMOVE_FROM_FAVORITES:
      return state.filter((card) => card.id !== action.data.id);

    default:
      return state;
  }
};
