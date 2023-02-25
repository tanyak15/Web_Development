import React from "react";
import styles from "./Navbar.module.css";
import { Search } from "react-feather";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Movies App</div>

      <div className={styles.right}>
        <div className={styles.search}>
          <input type="text" placeholder="Search movies"></input>
          <Search />
        </div>

        <p className={styles.link}>
          <Link to="/explore">Explore</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
