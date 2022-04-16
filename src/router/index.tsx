import React from "react"
import {BrowserRouter as Router} from "react-router-dom"

import {store} from "../store"
import {MainRoutes} from "./routes"
import {CONFIG} from "../config"

export default () => {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])

  return mounted ? (
    <Router basename={CONFIG.baseURL}>
      <MainRoutes />
    </Router>
  ) : null
}
