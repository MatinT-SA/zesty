import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { getBasePath } from "../utils/config";

function Header() {
  const isProduction = window.location.hostname === "matint-sa.github.io";
  const basePath = getBasePath();

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-customOrange px-4 py-3 uppercase sm:px-6">
      <Link
        to={`${basePath}/`}
        className="flex items-center justify-center gap-2 tracking-widest transition-transform duration-200 hover:scale-105"
      >
        <img
          alt="logo"
          src={
            isProduction
              ? `${basePath}/images/logo-tp.png`
              : "/images/logo-tp.png"
          }
          className="lg:h-13 2xl:h-15 h-9 max-w-full sm:h-11 md:h-12 xl:h-14"
        />
        Zesty Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
