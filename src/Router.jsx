import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Images from "./Images";
import App from "./App";
import Present from "./components/Present";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/Gift",
      element: <Present />,
    },
    {
      path: "/Gift/Maps",
      element: <App />,
    },
    {
      path: "/Gift/Maps/:location",
      element: <Images />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
