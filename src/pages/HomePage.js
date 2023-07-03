import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";
import ProductTable from "../components/ProductTable";
import ViewModeContext from "../context/ViewModeContext";
import "../styles/HomePage.scss";
import Button from "../components/Button";

const HomePage = ({ toggleFavorite, addToCart, cards, favorites }) => {
  const { viewMode, toggleViewMode } = useContext(ViewModeContext);
  return (
    <div className="cards-container">
      <Button
        text="Перемикач виду"
        backgroundColor="goldenrod"
        onClick={toggleViewMode}
      />
      {viewMode === "table" ? (
        <ProductTable
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          cards={cards}
          favorites={favorites}
        />
      ) : (
        <ProductList
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          cards={cards}
          favorites={favorites}
        />
      )}
    </div>
  );
};

HomePage.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
  toggleFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  cards: [],
  favorites: [],
};

export default HomePage;
