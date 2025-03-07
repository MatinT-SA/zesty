import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-orange-300 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 md:w-72 lg:w-80 xl:w-96 2xl:w-[30rem]"
      />
    </form>
  );
}

export default SearchOrder;
