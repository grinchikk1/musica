import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard";

const FavoritesPage = ({ toggleFavorite, addToCart, favorites }) => {
  return (
    <div className="cart-list">
      {favorites.map((card) => (
        <ProductCard
          key={card.id}
          card={card}
          isFavorite={true}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

FavoritesPage.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesPage;
