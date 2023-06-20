import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SAVE_FAVORITES_DATA,
  SAVE_CART_DATA,
  LOAD_CART,
  LOAD_FAVORITES,
  SET_MODAL_STATUS,
  DELETE_ALL_FROM_CART,
} from "./Type";

export const loadCart = (savedCart) => {
  return { type: LOAD_CART, data: JSON.parse(savedCart) };
};

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  return {
    type: SAVE_CART_DATA,
    data: cart,
  };
};

export const addToCart = (data) => {
  return { type: ADD_TO_CART, data: data };
};

export const deleteFromCart = (data) => ({
  type: DELETE_FROM_CART,
  data,
});

export const deleteAllFromCart = () => {
  return { type: DELETE_ALL_FROM_CART };
};

export const loadFavorites = (loadFavorites) => {
  return { type: LOAD_FAVORITES, data: JSON.parse(loadFavorites) };
};

export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
  return {
    type: SAVE_FAVORITES_DATA,
    data: favorites,
  };
};

export const addToFavorites = (product) => ({
  type: ADD_TO_FAVORITES,
  data: product,
});

export const removeFromFavorites = (product) => ({
  type: REMOVE_FROM_FAVORITES,
  data: product,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  data: error,
});

export const setModalStatus = (isOpen, id) => ({
  type: SET_MODAL_STATUS,
  data: { isOpen, id },
});
