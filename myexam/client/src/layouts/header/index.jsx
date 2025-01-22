import React from 'react'
import styles from "./index.module.scss"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div className="container">
            <div className={styles["navs"]}>

        <h1><a href="#">Selling <span>.</span></a></h1>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/goods"}>Products</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>

        </ul>

            </div>


        </div>

    </nav>
  )
}

export default Header
