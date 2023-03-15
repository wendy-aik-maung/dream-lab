import UserLayout from "../layouts/user/UserLayout";
import Home from "../pages/user/home";
import Pricing from "../pages/user/pricing";
import PurchasePlan from "../pages/user/pricing/PurchasePlan";
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
  {
    path: "/pricing/purchaseplan/:subscriptionId",
    element: <PurchasePlan />,
  },
];
