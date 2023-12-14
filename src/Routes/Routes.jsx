import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "../Pages/Home/Home"
import NotFound from "../Pages/Not-Found/NotFound"

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}
