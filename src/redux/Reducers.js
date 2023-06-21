import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const savedFavorites = localStorage.getItem("favorites");

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart ? JSON.parse(savedCart) : [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    deleteAllFromCart: (state) => {
      return [];
    },
    loadCart: (state, action) => {
      return action.payload;
    },
    saveCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: savedFavorites ? JSON.parse(savedFavorites) : [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    loadFavorites: (state, action) => {
      return action.payload;
    },
    saveFavorites: (state) => {
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    fetchDataSuccess: (state, action) => {
      return action.payload;
    },
    fetchDataFailure: (state, action) => {
      console.error("Error occurred during data fetching:", action.payload);
      // Handle error
    },
  },
});

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    selectedItemId: null,
  },
  reducers: {
    setModalStatus: (state, action) => {
      state.isModalOpen = action.payload.isOpen;
      state.selectedItemId = action.payload.itemId;
    },
  },
});

export const { setModalStatus } = modalSlice.actions;

export const {
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
  loadCart,
  saveCart,
} = cartSlice.actions;

export const {
  addToFavorites,
  removeFromFavorites,
  loadFavorites,
  saveFavorites,
} = favoritesSlice.actions;

export const { fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

const reducers = {
  cart: cartSlice.reducer,
  favorites: favoritesSlice.reducer,
  data: dataSlice.reducer,
  modal: modalSlice.reducer,
};

export default reducers;
