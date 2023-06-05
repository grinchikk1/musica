import { Component } from "react";
import PropTypes from "prop-types";
import "./styles/App.scss";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import getData from "./services/ApiService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cart: [],
      favorites: [],
    };
  }

  async componentDidMount() {
    const results = await getData();
    this.setState({ cards: results });

    const savedCart = localStorage.getItem("cart");
    const savedFavorites = localStorage.getItem("favorites");

    if (savedCart) {
      this.setState({ cart: JSON.parse(savedCart) });
    }

    if (savedFavorites) {
      this.setState({ favorites: JSON.parse(savedFavorites) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  addToFavorites = (product) => {
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, product],
    }));
  };

  removeFromFavorites = (card) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.filter((p) => p.id !== card.id),
    }));
  };

  toggleFavorite = (product) => {
    const { favorites } = this.state;
    if (favorites.find((p) => p.id === product.id)) {
      this.removeFromFavorites(product);
    } else {
      this.addToFavorites(product);
    }
  };

  render() {
    const { cards, cart, favorites } = this.state;

    return (
      <div className="app">
        <Header title={"Music Store"} cart={cart} favorites={favorites} />
        <ProductList
          toggleFavorite={this.toggleFavorite}
          addToCart={this.addToCart}
          cards={cards}
          favorites={favorites}
        />
      </div>
    );
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cart: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  cards: [],
  cart: [],
  favorites: [],
};

export default App;
