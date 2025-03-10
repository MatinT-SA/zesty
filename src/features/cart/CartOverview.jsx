import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Utensils } from "lucide-react";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span className="inline-block transform transition-transform duration-300 hover:-translate-y-0.5">
          {totalCartQuantity} pizzas
        </span>
        <span className="inline-block transform transition-transform duration-300 hover:-translate-y-0.5">
          {formatCurrency(totalCartPrice)}
        </span>
      </p>
      <Link
        to="/cart"
        className="flex items-center justify-center gap-2 transition-colors duration-200 hover:text-customOrange"
      >
        Open cart <Utensils className="h-6 w-6 text-stone-300" />
      </Link>
    </div>
  );
}

export default CartOverview;
