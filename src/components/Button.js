import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.scss";

const Button = ({ backgroundColor, text, onClick }) => {
  return (
    <button className="button" style={{ backgroundColor }} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
