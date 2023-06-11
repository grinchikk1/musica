import PropTypes from "prop-types";
import ProductList from "../components/ProductList";

const HomePage = ({ toggleFavorite, addToCart, cards, favorites }) => (
  <div>
    <ProductList
      toggleFavorite={toggleFavorite}
      addToCart={addToCart}
      cards={cards}
      favorites={favorites}
    />
  </div>
);

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
