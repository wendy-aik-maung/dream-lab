import AdminLogin from "../pages/admin/login";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/dashboard";
import PlanIndex from "../pages/admin/plan";
import SubscriptionIndex from "../pages/admin/subscription";
import CreateSubscription from "../pages/admin/subscription/CreateSubscription";
import EditSubscription from "../pages/admin/subscription/EditSubscription";
export const routes = [
  {
    path: "login",
    children: [{ index: true, element: <AdminLogin /> }],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "subscriptions",
        children: [
          {
            index: true,
            element: <SubscriptionIndex />,
          },
          {
            path: "create",
            element: <CreateSubscription />,
          },
          {
            path: "edit",
            element: <EditSubscription />,
          },
        ],
      },
      {
        path: "plans",
        children: [{ index: true, element: <PlanIndex /> }],
      },
    ],
  },
];
