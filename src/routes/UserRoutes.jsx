import UserLayout from "../layouts/user/UserLayout";
import Home from "../pages/user/home";
export const routes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
