import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/ProductCard.scss";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../redux/Action";

const ProductCart = ({ card, deleteToCart, toggleFavorite, isFavorite }) => {
  const isModalOpen = useSelector((state) => state.modalReducer.isModalOpen);
  const selectedItemId = useSelector(
    (state) => state.modalReducer.selectedItemId
  );
  const dispatch = useDispatch();

  const handleDeleteToCart = () => {
    dispatch(setModalStatus(true, card.id));
  };

  const handleDeleteButtonOk = () => {
    dispatch(setModalStatus(false, card.id));
    deleteToCart(card);
  };

  const handleModalClose = () => {
    dispatch(setModalStatus(false, card.id));
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
      <Modal
        header="Confirmation"
        closeButton={true}
        text={`Are you sure you want to remove this item from your cart?`}
        isOpen={isModalOpen && selectedItemId === card.id}
        onRequestClose={handleModalClose}
        actions={
          <>
            <Button
              backgroundColor="goldenrod"
              text="Ok"
              onClick={handleDeleteButtonOk}
            />
            <Button
              backgroundColor="goldenrod"
              text="Cancel"
              onClick={handleModalClose}
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
