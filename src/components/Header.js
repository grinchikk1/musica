import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ favorites, cart }) {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link className="header-title" to="/musica/">
            Music Store
          </Link>
        </li>
        <ul className="header-btn-box">
          <li>
            <Link className="header-btn" to="/musica/favorites">
              Вибране {favorites.length}
              <FaStar />
            </Link>
          </li>
          <li>
            <Link className="header-btn" to="/musica/cart">
              Кошик {cart.length}
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
