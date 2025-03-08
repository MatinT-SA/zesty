import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, className = "" }) {
  const navigate = useNavigate();

  const baseClass =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline flex  items-center gap-1";

  const mergedClass = `${baseClass} ${className}`.trim();

  if (to === "-1")
    return (
      <button className={mergedClass} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={mergedClass}>
      {children}
    </Link>
  );
}

export default LinkButton;
