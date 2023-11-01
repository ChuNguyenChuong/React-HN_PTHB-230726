import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

import React from "react"

const RootPage = () => {

  return <div>

    <Link to="/about">about page</Link>
    <br />
    <NavLink to="/home">home page</NavLink>
  </div >
}

export default RootPage