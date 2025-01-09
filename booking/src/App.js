import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import ErrorPage from "./pages/ErrorPage";
import { destinationsLoader } from "./loaders/destinationsLoader";
import { hotelsLoader } from "./loaders/hotelsLoader";
import "./styles/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: destinationsLoader, 
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "hotels",
        element: <Hotels />,
        loader: hotelsLoader
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
