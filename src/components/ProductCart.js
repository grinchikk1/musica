import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/ProductCard.scss";
import Modal from "./Modal";

const ProductCart = ({ card, deleteToCart, toggleFavorite, isFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteToCart = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    deleteToCart(card);
  };

  return (
    <li className="card-item">
      <img src={card.src} alt={card.title} />
      <div className="card-item-content">
        <h2>{card.title}</h2>
        <p>Ціна: {card.price} грн.</p>
        <p>Артикул: {card.article}</p>
        <div className="color-item">
          Колір:{" "}
          {
            <div
              className="box-color"
              style={{ backgroundColor: `${card.color}` }}
            ></div>
          }
        </div>
        <span className="favorite" onClick={() => toggleFavorite(card)}>
          {isFavorite ? "★" : "☆"}
        </span>
        <span className="remove-to-cart" onClick={handleDeleteToCart}>
          &times;
        </span>
      </div>
      <Button
        onClick={() => {}}
        text={"Buy Now"}
        backgroundColor={"goldenrod"}
      />
      <Modal
        header="Confirmation"
        closeButton={true}
        text={`Are you sure you want to remove this item from your cart?`}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        actions={
          <>
            <Button
              backgroundColor="goldenrod"
              text="Ok"
              onClick={handleModalClose}
            />
            <Button
              backgroundColor="goldenrod"
              text="Cancel"
              onClick={() => setIsModalOpen(false)}
            />
          </>
        }
      />
    </li>
  );
};

ProductCart.propTypes = {
  card: PropTypes.object.isRequired,
  deleteToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default ProductCart;
