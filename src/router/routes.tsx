import React from "react"
import {useRoutes} from "react-router-dom"

import PrivateRoute from "../components/private-route"
import MainEntry from "../views/main"
import HomeIndex from "../views/index"
import Login from "../views/login/index"

export function MainRoutes() {
  const _Login = <PrivateRoute element={Login} meta={{title: "Login"}} />

  return useRoutes([
    {
      path: '/',
      element: _Login
    },
    {
      path: '/login',
      element: _Login
    },
    {
      path: "/home",
      element: <MainEntry/>,
      children: [
        {
          path: "index",
          element: <PrivateRoute element={HomeIndex} meta={{
            requiresAuth: true,
            title: "Home"
          }}/>,
        },
      ]
    },
  ])

}
