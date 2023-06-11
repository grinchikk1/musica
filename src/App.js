import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import getData from "./services/ApiService";
import "./styles/App.scss";

const App = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getData();
      setCards(results);
    };

    fetchData();

    const savedCart = localStorage.getItem("cart");
    const savedFavorites = localStorage.getItem("favorites");

    try {
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);

  const addToCart = (product) => {
    if (isCardInCart(product.id)) {
      return alert("You already have a card in your cart");
    }

    setCart((prevCart) => [...prevCart, product]);
  };

  const deleteToCart = (product) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  };

  const isCardInCart = (cardId) => {
    return cart.some((card) => card.id === cardId);
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (card) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((p) => p.id !== card.id)
    );
  };

  const toggleFavorite = (product) => {
    if (favorites.find((p) => p.id === product.id)) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="header">
            <li>
              <Link className="header-title" to="/">
                Music Store
              </Link>
            </li>
            <ul className="header-btn-box">
              <li>
                <Link className="header-btn" to="/favorites">
                  Вибране {favorites.length}
                  <FaStar />
                </Link>
              </li>
              <li>
                <Link className="header-btn" to="/cart">
                  Кошик {cart.length}
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
        <Routes index="/">
          <Route
            path="/"
            exact
            element={
              <HomePage
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
                cards={cards}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                toggleFavorite={toggleFavorite}
                deleteToCart={deleteToCart}
                cart={cart}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
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
