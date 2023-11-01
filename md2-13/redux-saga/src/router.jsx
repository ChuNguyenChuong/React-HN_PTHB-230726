import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/Home";
import AboutPage from "./page/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export default router;
