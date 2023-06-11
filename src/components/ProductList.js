import React from "react";
import PropTypes from "prop-types";
import "../styles/ProductList.scss";
import ProductCard from "./ProductCard";

const ProductList = ({ cards, addToCart, toggleFavorite, favorites }) => {
  const cardList = cards.map((card) => (
    <ProductCard
      key={card.id}
      card={card}
      addToCart={addToCart}
      toggleFavorite={toggleFavorite}
      isFavorite={favorites.some((p) => p.id === card.id)}
    />
  ));

  return <ul className="card-list">{cardList}</ul>;
};

ProductList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
