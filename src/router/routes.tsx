import React from 'react'
import {useRoutes} from 'react-router-dom'
import PrivateRoute from '../components/private-route'
import MainEntry from '../views/main'
import HomeIndex from '../views/index'

export function MainRoutes() {

  return useRoutes([
    {
      path: '/home',
      element: <MainEntry/>,
      children: [
        {
          path: 'index',
          element: <PrivateRoute element={HomeIndex} meta={{
            requiresAuth: true,
            title: 'Home'
          }}/>,
        },
      ]
    },
  ])

}
