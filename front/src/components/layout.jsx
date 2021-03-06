import React from "react"
import Navbar from "./navbar"
import "./i18n"


export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Navbar />
    {children}
  </div>
)