import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Zesty Co.</Link>

      <SearchOrder />
    </div>
  );
}

export default Header;
