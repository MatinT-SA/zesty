import { ChevronsLeft } from "lucide-react";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">
        <ChevronsLeft className="h-6 w-6 text-blue-500" /> Back to menu
      </LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
