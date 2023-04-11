import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Ticker from "pages/page.ticker/Ticker";
import Main from "pages/page.main/Main";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Main />
        },
        {
          path: ":id",
          element: <Ticker />
        },
      ]
    }
  ]
)