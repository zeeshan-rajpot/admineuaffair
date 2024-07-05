import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Login from "./Ui/Pages/Login/Login";
import Overview from "./Ui/Pages/Admin/Overview/Overview";
import Users from "./Ui/Pages/Admin/Users/Users";
import Reoprt from "./Ui/Pages/Admin/Report/Reoprt";
import Article from "./Ui/Pages/Admin/Article/Article";
import NewsFlash from "./Ui/Pages/Admin/NewsFlash/NewsFlash";
import AdminRequest from "./Ui/Pages/Admin/AdminRequest/AdminRequest";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/overview",
      element: <Overview/>,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/report",
      element: <Reoprt />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/newsFlash",
      element: <NewsFlash />,
    },
     {
      path: "/AdminRequest",
      element: <AdminRequest />,
    },
  
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
