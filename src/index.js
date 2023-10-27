import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles.css";
import ListaPersonagens from "./paginas/ListaPersonagens";
import Personagem from "./paginas/Personagem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaPersonagens />,
  },
  {
    path: "/personagem",
    element: <Personagem />,
  },
  {
    path: "*",
    element: <div>Essa página não existe</div>,
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);