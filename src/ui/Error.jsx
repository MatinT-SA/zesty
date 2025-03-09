import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 p-10 text-center">
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-stone-800">
        Oops! Page not found.
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        {error.data ||
          error.message ||
          "The page you're looking for doesn't exist."}
      </p>

      <LinkButton
        to="/"
        className="mt-6 rounded-lg bg-red-500 px-6 py-3 text-lg font-semibold tracking-wide text-stone-100 shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:text-stone-200"
      >
        ⬅️ Go Home
      </LinkButton>
    </div>
  );
}

export default Error;
