import { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/ProductCard.scss";
import Modal from "./Modal";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleAddToCart = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
    this.props.addToCart(this.props.card);
  };

  render() {
    const { card, toggleFavorite, isFavorite } = this.props;
    const { isModalOpen } = this.state;

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
          <span onClick={() => toggleFavorite(card)}>
            {isFavorite ? "★" : "☆"}
          </span>
        </div>
        <Button
          onClick={this.handleAddToCart}
          text={"Add to cart"}
          backgroundColor={"goldenrod"}
        />
        <Modal
          header="Confirmation"
          closeButton={true}
          text={`Product "${card.title}" has been added to the cart.`}
          isOpen={isModalOpen}
          onRequestClose={() => this.setState({ isModalOpen: false })}
          actions={
            <>
              <Button
                backgroundColor="goldenrod"
                text="Ok"
                onClick={this.handleModalClose}
              />
              <Button
                backgroundColor="goldenrod"
                text="Cancel"
                onClick={() => this.setState({ isModalOpen: false })}
              />
            </>
          }
        />
      </li>
    );
  }
}

ProductCard.propTypes = {
  card: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default ProductCard;
