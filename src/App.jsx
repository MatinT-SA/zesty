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

const basePath = process.env.NODE_ENV === "production" ? "/zesty" : "";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: `${basePath}/`,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: `${basePath}/menu`,
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: `${basePath}/cart`,
        element: <Cart />,
      },
      {
        path: `${basePath}/order/:orderId`,
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: `${basePath}/order/new`,
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} basename={basePath} />;
}
