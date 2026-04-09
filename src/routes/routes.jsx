
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ProductsPage from "@/pages/ProductsPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },

  {
    path: "/products/:productId",
    element: <ProductDetailsPage />,
  },
]);
