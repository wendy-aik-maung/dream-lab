import UserLayout from "../layouts/user/UserLayout";
import NotFound from "../pages/404/404";
import Articles from "../pages/user/articles";
import ArticleDetails from "../pages/user/articles/ArticleDetails";
import ArticleOverView from "../pages/user/articles/ArticleOverView";
import Books from "../pages/user/books";
import BookDetails from "../pages/user/books/BookDetails";
import BookOverView from "../pages/user/books/BookOverView";
import Category from "../pages/user/category";
import ArticleCategory from "../pages/user/category/ArticleCategory";
import BookCategory from "../pages/user/category/BookCategory";
import SingleCategory from "../pages/user/category/SingleCategory";
import Home from "../pages/user/home";
import Library from "../pages/user/library";
import ArticleLibrary from "../pages/user/library/ArticleLibrary";
import BookLibrary from "../pages/user/library/BookLibrary";
import MyAccount from "../pages/user/myaccount";
import Pricing from "../pages/user/pricing";
import PurchasePlan from "../pages/user/pricing/PurchasePlan";
import Success from "../pages/user/pricing/Success";
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
        path: "library",
        element: <Library />,
        children: [
          { path: "books", element: <BookLibrary /> },
          { path: "articles", element: <ArticleLibrary /> },
        ],
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "category/:id",
        element: <SingleCategory />,
        children: [
          { path: "books", element: <BookCategory /> },
          { path: "articles", element: <ArticleCategory /> },
        ],
      },
      {
        path: "books",
        element: <Books />,
        children: [{ path: ":slug", element: <BookOverView /> }],
      },
      {
        path: "articles",
        element: <Articles />,
        children: [{ path: ":slug", element: <ArticleOverView /> }],
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
    path: "/books/:slug/:id/bookdetails",
    element: <BookDetails />,
  },
  { path: "/articles/:slug/:id/articledetails", element: <ArticleDetails /> },
  {
    path: "/pricing/purchaseplan/:subscriptionId",
    element: <PurchasePlan />,
  },
  {
    path: "/pricing/purchaseplan/success",
    element: <Success />,
  },
  {
    path: "*",
    element: <NotFound to="/" />,
  },
];
