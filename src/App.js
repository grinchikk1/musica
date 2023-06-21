import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  loadCart,
  saveCart,
} from "./redux/Reducers";
import {
  addToFavorites,
  loadFavorites,
  removeFromFavorites,
  saveFavorites,
} from "./redux/Reducers";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import fetchData from "./services/ApiService";
import "./styles/App.scss";
import Header from "./components/Header";

const App = () => {
  const cards = useSelector((state) => state.data);
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCart(cart));
    dispatch(saveFavorites(favorites));
  }, [cart, favorites, dispatch]);

  useEffect(() => {
    dispatch(fetchData());

    const savedCart = localStorage.getItem("cart");
    const savedFavorites = localStorage.getItem("favorites");

    try {
      if (savedCart) {
        dispatch(loadCart(JSON.parse(savedCart)));
      }

      if (savedFavorites) {
        dispatch(loadFavorites(JSON.parse(savedFavorites)));
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (isCardInCart(product.id)) {
      return alert("You already have a card in your cart");
    }

    dispatch(addToCart(product));
  };

  const handleDeleteToCart = (product) => {
    dispatch(deleteFromCart(product));
  };

  const isCardInCart = (cardId) => {
    return cart.some((card) => card.id === cardId);
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const handleRemoveFromFavorites = (card) => {
    dispatch(removeFromFavorites(card));
  };

  const toggleFavorite = (product) => {
    if (favorites.find((p) => p.id === product.id)) {
      handleRemoveFromFavorites(product);
    } else {
      handleAddToFavorites(product);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header cart={cart} favorites={favorites} />
        <Routes>
          <Route
            path="/musica/"
            element={
              <HomePage
                toggleFavorite={toggleFavorite}
                addToCart={handleAddToCart}
                cards={cards}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/musica/cart"
            element={
              <CartPage
                toggleFavorite={toggleFavorite}
                deleteToCart={handleDeleteToCart}
                cart={cart}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/musica/favorites"
            element={
              <FavoritesPage
                toggleFavorite={toggleFavorite}
                addToCart={handleAddToCart}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

App.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  cart: [],
  favorites: [],
};

export default App;
