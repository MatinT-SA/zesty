import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Zesty Co.</Link>

      <SearchOrder />

      <h1>Matin</h1>
    </header>
  );
}

export default Header;
