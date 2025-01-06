import React, { useEffect, useState } from "react";
import HeaderView from "@/view/headerView/headerView";
import useInViewport from "@/utils/useInViewport";
import styles from "./home.module.scss"; // 导入 CSS Modules 样式
import Skills from "./Skills";

function Home() {
  const { hasAnimated: hasAnimated1, elementRef: introRef } = useInViewport();

  return (
    <div className={styles.home}>
      <HeaderView />
      <div
        ref={introRef}
        className={`${styles.intro} ${
          hasAnimated1 ? styles["intro-active"] : ""
        }`}
      >
        <h1>Welcome to My Blog</h1>
        <p>
          Hi, I'm John Doe, a passionate frontend developer. Here, I share
          articles, tutorials, and insights about web development, coding
          practices, and more.
        </p>
      </div>
      <Skills />
      <div className={styles["latest-articles"]}>
        <h2>Latest Articles</h2>
        <ul>
          <li>
            <a href="/articles/react-hooks">Understanding React Hooks</a>
          </li>
          <li>
            <a href="/articles/javascript-es6">JavaScript ES6 Features</a>
          </li>
          <li>
            <a href="/articles/css-grid">CSS Grid Layout Tutorial</a>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a href="https://github.com/yourusername">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yourusername">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
