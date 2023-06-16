import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { dataReducer } from "./DataReducer";
import { favoritesReducer } from "./FavoritesReducer";
import { modalReducer } from "./ModalReducer";

export const rootReducer = combineReducers({
  cartReducer,
  dataReducer,
  favoritesReducer,
  modalReducer,
});
