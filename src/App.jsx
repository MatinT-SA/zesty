import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import CreateOrder, {
  action as actionCreateOrder,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/zesty/",
        element: <Home />,
      },
      {
        path: "/zesty/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/zesty/cart",
        element: <Cart />,
      },
      {
        path: "/zesty/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: "/zesty/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} basename="/zesty" />;
}
