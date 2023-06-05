import { Component } from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/Header.scss";

class Header extends Component {
  render() {
    const { title, cart, favorites } = this.props;

    return (
      <div className="header">
        <a className="header-title" href="#">
          {title}
        </a>
        <div className="header-btn-box">
          <button className="header-btn" onClick={() => {}}>
            Обране {favorites.length}
            <FaStar />
          </button>
          <button className="header-btn" onClick={() => {}}>
            Кошик {cart.length}
            <FaShoppingCart />
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  cart: [],
  favorites: [],
};

export default Header;
