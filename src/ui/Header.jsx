import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-customOrange flex items-center justify-between border-b border-stone-200 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Zesty Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
