import { ChevronsLeft, Donut } from "lucide-react";
import LinkButton from "../../ui/LinkButton";
import PizzaScene from "../../ui/PizzaScene";

function EmptyCart() {
  return (
    <div className="rounded-lg px-6 py-6 text-center">
      <LinkButton
        to="/menu"
        className="mb-4 flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-blue-200 hover:text-blue-600"
      >
        <ChevronsLeft className="h-6 w-6 text-blue-500" /> Back to Menu
      </LinkButton>

      <div className="my-2">
        <p className="mb-4 text-xl font-semibold text-stone-800">
          Your cart is empty!
        </p>
        <p className="text-lg text-stone-600">
          Looks like you've cleared your cart. No worries, you can always fill
          it up with your favorite pizzas again!{" "}
          <Donut className="inline-block h-6 w-6 text-customOrange" />
        </p>
      </div>

      <div className="pizza mt-1 flex h-[18rem] items-center justify-center sm:h-[29rem]">
        <PizzaScene />
      </div>
    </div>
  );
}

export default EmptyCart;
