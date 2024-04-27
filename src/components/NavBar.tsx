import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_title}>My todos</div>
      <div className={styles.navbar_links}>
        <ul className={styles.navbar_links_list}>
          <li className={styles.navbar_links_list_link}>
            <Link to="/">All</Link>
          </li>
          <li className={styles.navbar_links_list_link}>
            <Link to="/active">Active</Link>
          </li>
          <li className={styles.navbar_links_list_link}>
            <Link to="/compleated">Compleated</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
