import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Countries from "../pages/Countries";
import { Home } from "../pages/Home";
import { Team } from "../pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countries",
        element: <Countries />,
        children: [],
      },
      {
        path: "/team",
        element: <Team />,
        children: [],
      },
    ],
  },
]);
