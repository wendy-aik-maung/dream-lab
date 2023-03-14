import UserLayout from "../layouts/user/UserLayout";
import Home from "../pages/user/home";
import Pricing from "../pages/user/pricing";
export const routes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
];
