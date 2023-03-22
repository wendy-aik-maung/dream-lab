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
import CategoryIndex from "../pages/admin/category";
import BookAuthor from "../pages/admin/author/BookAuthor";
import AuthorIndex from "../pages/admin/author";
import ArticleAuthor from "../pages/admin/author/ArticleAuthor";
import BookIndex from "../pages/admin/book";
import EditBook from "../pages/admin/book/EditBook";
import CreateBook from "../pages/admin/book/CreateBook";
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
      {
        path: "category",
        children: [{ index: true, element: <CategoryIndex /> }],
      },
      {
        path: "author",
        element: <AuthorIndex />,
        children: [
          {
            path: "",
            element: (
              <div className="font-poppins text-2xl text-textColor1">
                Please Select Author.
              </div>
            ),
          },
          { path: "books", element: <BookAuthor /> },
          { path: "articles", element: <ArticleAuthor /> },
        ],
      },
      {
        path: "books",
        children: [
          {
            index: true,
            element: <BookIndex />,
          },
          {
            path: "create",
            element: <CreateBook />,
          },
          {
            path: "edit/:slug",
            element: <EditBook />,
          },
        ],
      },
    ],
  },
];
