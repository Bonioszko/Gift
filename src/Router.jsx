import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Images from "./Images";
import App from "./App";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/Gift",
      element: <App />,
    },
    {
      path: "/Gift/:location",
      element: <Images />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
