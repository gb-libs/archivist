import React from "react"
import {CONFIG} from "../../config"

const currentYear = new Date().getFullYear()

export default () => {
  return (
    <footer className="global-footer">
      <div>
        Copyright &copy; 2022-{currentYear} {CONFIG.title}
      </div>
    </footer>
  )
}
