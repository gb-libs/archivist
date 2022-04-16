import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

import {MainRoutes} from "./routes"
import { store } from "../store"
import { CONFIG } from "../config"

export default () => {
  return <Router basename={CONFIG.baseURL}>
    <MainRoutes/>
  </Router>
}
