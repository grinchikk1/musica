import reducers, {
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
  loadCart,
  saveCart,
  addToFavorites,
  removeFromFavorites,
  loadFavorites,
  saveFavorites,
  fetchDataSuccess,
  fetchDataFailure,
  setModalStatus,
} from "./Reducers";

describe("Reducers", () => {
  // Перевірка cartSlice
  describe("cartSlice reducers", () => {
    // addToCart
    it("should add an item to the cart", () => {
      const initialState = [];
      const itemToAdd = { id: 1, name: "Товар 1", price: 10.99 };
      const nextState = reducers.cart(initialState, addToCart(itemToAdd));
      expect(nextState).toEqual([itemToAdd]);
    });

    // deleteFromCart
    it("should delete an item from the cart", () => {
      const initialState = [{ id: 1, name: "Товар 1", price: 10.99 }];
      const itemToDelete = { id: 1, name: "Товар 1", price: 10.99 };
      const nextState = reducers.cart(
        initialState,
        deleteFromCart(itemToDelete)
      );
      expect(nextState).toEqual([]);
    });

    // deleteAllFromCart
    it("should delete all items from the cart", () => {
      const initialState = [
        { id: 1, name: "Товар 1", price: 10.99 },
        { id: 2, name: "Товар 2", price: 11.99 },
      ];
      const nextState = reducers.cart(initialState, deleteAllFromCart());
      expect(nextState).toEqual([]);
    });

    // loadCart
    it("should load items into the cart", () => {
      const initialState = [];
      const itemsToLoad = [
        { id: 1, name: "Товар 1", price: 10.99 },
        { id: 2, name: "Товар 2", price: 11.99 },
      ];
      const nextState = reducers.cart(initialState, loadCart(itemsToLoad));
      expect(nextState).toEqual(itemsToLoad);
    });

    // saveCart
    it("should save cart items to local storage", () => {
      const initialState = [{ id: 1, name: "Товар 1", price: 10.99 }];
      const nextState = reducers.cart(initialState, saveCart());
      expect(localStorage.getItem("cart")).toEqual(JSON.stringify(nextState));
    });
  });

  // Перевірка favoritesSlice
  describe("favoritesSlice reducers", () => {
    // addToFavorites
    it("should add an item to favorites", () => {
      const initialState = [];
      const itemToAdd = { id: 1, name: "Товар 1", price: 10.99 };
      const nextState = reducers.favorites(
        initialState,
        addToFavorites(itemToAdd)
      );
      expect(nextState).toEqual([itemToAdd]);
    });

    // removeFromFavorites
    it("should remove an item from favorites", () => {
      const initialState = [{ id: 1, name: "Товар 1", price: 10.99 }];
      const itemToDelete = { id: 1, name: "Товар 1", price: 10.99 };
      const nextState = reducers.favorites(
        initialState,
        removeFromFavorites(itemToDelete)
      );
      expect(nextState).toEqual([]);
    });

    // loadFavorites
    it("should load items into favorites", () => {
      const initialState = [];
      const itemsToLoad = [
        { id: 1, name: "Товар 1", price: 10.99 },
        { id: 2, name: "Товар 2", price: 11.99 },
      ];
      const nextState = reducers.favorites(
        initialState,
        loadFavorites(itemsToLoad)
      );
      expect(nextState).toEqual(itemsToLoad);
    });

    // saveFavorites
    it("should save favorites to localStorage", () => {
      const initialState = [{ id: 1, name: "Товар 1", price: 10.99 }];
      const nextState = reducers.favorites(initialState, saveFavorites());
      expect(localStorage.getItem("favorites")).toEqual(
        JSON.stringify(nextState)
      );
    });
  });

  // Перевірка dataSlice
  describe("dataSlice  reducers", () => {
    // fetchDataSuccess
    it("should handle successful data fetch", () => {
      const initialState = [];
      const data = [
        { id: 1, name: "Товар 1", price: 10.99 },
        { id: 2, name: "Товар 2", price: 11.99 },
      ];
      const nextState = reducers.data(initialState, fetchDataSuccess(data));
      expect(nextState).toEqual(data);
    });

    // fetchDataFailure
    it("should handle failure data fetch", () => {
      const initialState = [];
      const error = "Error occurred during data fetching";
      console.error = jest.fn();
      reducers.data(initialState, fetchDataFailure(error));
      expect(console.error).toHaveBeenCalledWith(
        "Error occurred during data fetching:",
        error
      );
    });
  });

  // Перевірка modalSlice
  describe("modalSlice reducers", () => {
    // setModalStatus
    it("should set the modal status", () => {
      const initialState = {
        isModalOpen: false,
        selectedItemId: null,
      };
      const nextState = reducers.modal(
        initialState,
        setModalStatus({ isOpen: true, itemId: 1 })
      );
      expect(nextState).toEqual({ isModalOpen: true, selectedItemId: 1 });
    });
  });
});
