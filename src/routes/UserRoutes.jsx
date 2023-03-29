import UserLayout from "../layouts/user/UserLayout";
import Home from "../pages/user/home";
import MyAccount from "../pages/user/myaccount";
import Pricing from "../pages/user/pricing";
import PurchasePlan from "../pages/user/pricing/PurchasePlan";
import SubscriptionPlans from "../pages/user/subscriptionplans";

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
        path: "subscriptionplans",
        element: <SubscriptionPlans />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "myaccount",
        element: <MyAccount />,
      },
    ],
  },
  {
    path: "/pricing/purchaseplan/:subscriptionId",
    element: <PurchasePlan />,
  },
];
