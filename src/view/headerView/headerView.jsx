import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./headerView.module.scss";

function HeaderView() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/susuoutline.github.io/">DevCraft</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/susuoutline.github.io/">主页</Link>
          </li>
          <li>
            <Link to="/susuoutline.github.io/KnowledgeBase">知识库</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderView;
