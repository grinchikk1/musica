import React from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import "../styles/ProductTable.scss";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalStatus } from "../redux/Reducers";

const ProductList = ({ cards, addToCart, toggleFavorite, favorites }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const handleAddToCart = (itemId) => {
    dispatch(setModalStatus({ isOpen: true, itemId }));
  };

  const handleModalClose = (itemId) => {
    dispatch(setModalStatus({ isOpen: false, itemId }));
  };

  const handleDeleteButtonOk = (itemId) => {
    dispatch(setModalStatus({ isOpen: false, itemId }));
    const card = cards.find((card) => card.id === itemId);
    addToCart(card);
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Зображення</th>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Артикул</th>
          <th>Колір</th>
          <th>Улюблене</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => (
          <tr key={card.id}>
            <td>
              <img src={card.src} alt={card.title} className="product-image" />
            </td>
            <td>{card.title}</td>
            <td>{card.price} грн.</td>
            <td>{card.article}</td>
            <td>
              <div
                className="color-box"
                style={{ backgroundColor: card.color }}
              ></div>
            </td>
            <td>
              <span className="favorite" onClick={() => toggleFavorite(card)}>
                {favorites.some((p) => p.id === card.id) ? "★" : "☆"}
              </span>
            </td>
            <td>
              <Button
                text="Add to cart"
                backgroundColor="goldenrod"
                onClick={() => handleAddToCart(card.id)}
              />
              <Modal
                header="Confirmation"
                closeButton={true}
                text={`Product "${card.title}" has been added to the cart.`}
                isOpen={modal.isModalOpen && modal.selectedItemId === card.id}
                onRequestClose={() => handleModalClose(card.id)}
                actions={
                  <>
                    <Button
                      backgroundColor="goldenrod"
                      text="Ok"
                      onClick={() => handleDeleteButtonOk(card.id)}
                    />
                    <Button
                      backgroundColor="goldenrod"
                      text="Cancel"
                      onClick={() => handleModalClose(card.id)}
                    />
                  </>
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
