import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="header">
          <div className="logo">
            <h1>WINTER</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
              <li>
                <NavLink to={"/basket"}>Basket</NavLink>
              </li>
              <li>
                <NavLink to={"/add"}>Add</NavLink>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header