import { createBrowserRouter, Outlet } from "react-router-dom"
import Users from "../users/Users";
import App from "../../App";
import Dashboard from "../dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
       index: true,
        element: <App />,
      },
      {
        path: "me",
        element: <Dashboard/>,
        children :[
          {
            path: "users",
            element : <Users/>
          },
          {
            path: "users/:userId",
            element : <Users/>
          }
        ]
      }
    ],
  }, 
]);

export {routes};