import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Pages/Home/Home'
import Main from '../Layout/Main'
import Admin from "../Layout/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import Users from "../Pages/Dashboard/Users/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Admin />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/addproperty",
          element: <AddProperty />,
        },
        {
          path: "/dashboard/users",
          element: <Users />,
        },
      ],
    },
  ]);

export default router;