import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Pages/Home/Home'
import Main from '../Layout/Main'
import Admin from "../Layout/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";
import Users from "../Pages/Dashboard/Users/Users";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Forgot from "../Pages/Forgot/Forgot";
import NewProjects from "../Pages/NewProjects/NewProjects";
import Bookings from "../Pages/Dashboard/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forgotpassword",
          element: <Forgot />,
        },
        {
          path: "/newprojects",
          element: <NewProjects />,
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
        {
          path: "/dashboard/bookings",
          element: <Bookings />,
        },
      ],
    },
  ]);

export default router;