import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Home/Home";
import DetailsCard from "../Components/Cards/DetailsCard";
import Contact from "../Components/Contact/Contact";
import Cart from "../Components/Cart/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movieDetails/:id",
        element: <DetailsCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
