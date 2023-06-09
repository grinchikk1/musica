import ProductCart from "../components/ProductCart";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/ProductCart.scss";
import Button from "../components/Button";
import ModalForm from "../components/ModalForm";
import { deleteAllFromCart } from "../redux/Reducers";
import { useDispatch } from "react-redux";

const CartPage = ({ toggleFavorite, cart, deleteToCart, favorites }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModalForm = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const cartList = cart.map((card) => (
    <ProductCart
      key={card.id}
      toggleFavorite={toggleFavorite}
      deleteToCart={deleteToCart}
      isFavorite={favorites.some((p) => p.id === card.id)}
      card={card}
    />
  ));

  return (
    <div className="buy-now">
      {cart.length > 0 && (
        <Button
          text={"Buy Now"}
          backgroundColor={"goldenrod"}
          onClick={handleOpenModalForm}
        />
      )}
      {isModalOpen && (
        <ModalForm
          cart={cart}
          deleteAllFromCart={() => dispatch(deleteAllFromCart())}
          closeButton={true}
          isOpen={isModalOpen}
          handleModalClose={handleModalClose}
          onRequestClose={handleModalClose}
        />
      )}
      {cart.length > 0 ? (
        <ul className="cart-list">{cartList}</ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

CartPage.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteToCart: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartPage;
