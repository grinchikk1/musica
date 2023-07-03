import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
            <Link to="/musica/favorites">
              <Button
                text={"Вибране " + favorites.length}
                backgroundColor="goldenrod"
                onClick={() => {}}
              />
            </Link>
          </li>
          <li>
            <Link to="/musica/cart">
              <Button
                text={"Кошик " + cart.length}
                backgroundColor="goldenrod"
                onClick={() => {}}
              />
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
