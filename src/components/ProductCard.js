import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/ProductCard.scss";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../redux/Action";

const ProductCard = ({ card, addToCart, toggleFavorite, isFavorite }) => {
  const isModalOpen = useSelector((state) => state.modalReducer.isModalOpen);
  const selectedItemId = useSelector(
    (state) => state.modalReducer.selectedItemId
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(setModalStatus(true, card.id));
  };

  const handleModalClose = () => {
    dispatch(setModalStatus(false, card.id));
  };

  const handleDeleteButtonOk = () => {
    dispatch(setModalStatus(false, card.id));
    addToCart(card);
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
      </div>
      <Button
        onClick={handleAddToCart}
        text={"Add to cart"}
        backgroundColor={"goldenrod"}
      />
      <Modal
        header="Confirmation"
        closeButton={true}
        text={`Product "${card.title}" has been added to the cart.`}
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

ProductCard.propTypes = {
  card: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default ProductCard;
