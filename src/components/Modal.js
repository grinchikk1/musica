import { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Modal.scss";

class Modal extends Component {
  render() {
    const { header, closeButton, text, actions, isOpen, onRequestClose } =
      this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay" onClick={onRequestClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{header}</h2>
            {closeButton && (
              <button className="modal-close" onClick={onRequestClose}>
                &times;
              </button>
            )}
          </div>
          <div className="modal-content">{text}</div>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  actions: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Modal;
