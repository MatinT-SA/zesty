import { useFetcher, useLoaderData } from "react-router-dom";
import { Sparkles, Timer, Zap } from "lucide-react";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order # <span className="text-customOrange">{id}</span>
        </h2>
        <div className="flex items-center justify-center space-x-2">
          {priority && (
            <span className="rounded-rull flex items-center justify-center gap-2 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              <Zap className="h-4 w-4 text-stone-100" />
              Express
            </span>
          )}
          <span className="rounded-rull ho rounded-full bg-green-600 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="flex items-center gap-2 font-medium">
          {deliveryIn >= 0 ? (
            <>
              Delivery in {calcMinutesLeft(estimatedDelivery)} minutes
              <Timer className="h-6 w-6 text-customOrange" />
            </>
          ) : (
            "Order should have arrived"
          )}
        </p>
        <p className="flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-customOrange" /> Estimated delivery:{" "}
          {formatDate(estimatedDelivery)}
          <Sparkles className="h-6 w-6 text-customOrange" />
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={order.id}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price express: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          Pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
