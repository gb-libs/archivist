import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

import CONFIG from "../config";
import store from "../store"
import {MainRoutes} from "./routes"
import {setupInterceptor} from "../utils/http"

export default () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setupInterceptor(store)
    setMounted(true)
  }, [])

  return mounted ? (
    <Router basename={CONFIG.baseURL}>
      <MainRoutes/>
    </Router>
  ) : null
}
