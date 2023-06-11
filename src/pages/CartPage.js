import ProductCart from "../components/ProductCart";
import React from "react";
import PropTypes from "prop-types";
import "../styles/ProductCart.scss";

const CartPage = ({ toggleFavorite, cart, deleteToCart, favorites }) => {
  const cartList = cart.map((card) => {
    return (
      <ProductCart
        key={card.id}
        toggleFavorite={toggleFavorite}
        deleteToCart={deleteToCart}
        isFavorite={favorites.some((p) => p.id === card.id)}
        card={card}
      />
    );
  });
  return <ul className="cart-list">{cartList}</ul>;
};

CartPage.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteToCart: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartPage;
