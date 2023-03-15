import AdminLogin from "../pages/admin/login";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/dashboard";
import PlanIndex from "../pages/admin/plan";
import SubscriptionIndex from "../pages/admin/subscription";
import CreateSubscription from "../pages/admin/subscription/CreateSubscription";
import EditSubscription from "../pages/admin/subscription/EditSubscription";
import SubscriberIndex from "../pages/admin/subscriber";
import AllSubscriber from "../pages/admin/subscriber/AllSubscriber";
import RequestSubscriber from "../pages/admin/subscriber/RequestSubscriber";
import ActiveSubscriber from "../pages/admin/subscriber/ActiveSubscriber";
import ExpiredSubscriber from "../pages/admin/subscriber/ExpiredSubscriber";
// import ActiveSubscriber
// import ExpiredSubscriber
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
            path: "edit/:id",
            element: <EditSubscription />,
          },
        ],
      },
      {
        path: "plans",
        children: [{ index: true, element: <PlanIndex /> }],
      },
      {
        path: "subscribers",
        element: <SubscriberIndex />,
        children: [
          { index: true, element: <AllSubscriber /> },
          { path: "request", element: <RequestSubscriber /> },
          { path: "active", element: <ActiveSubscriber /> },
          { path: "expired", element: <ExpiredSubscriber /> },
        ],
      },
    ],
  },
];
