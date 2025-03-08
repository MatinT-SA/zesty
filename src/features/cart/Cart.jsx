import { useDispatch, useSelector } from "react-redux";
import { ChevronsLeft } from "lucide-react";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { getBasePath } from "../../utils/config";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  const basePath = getBasePath();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-4">
      <LinkButton to={`${basePath}/menu`}>
        <ChevronsLeft className="h-6 w-6 text-blue-500" /> Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to={`${basePath}/order/new`} type="primary">
          Order Pizza
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
