import React from "react";
import "./home.scss";
import HeaderView from "@/view/headerView/headerView";
import useInViewport from "@/utils/useInViewport";

function Home() {
  const { hasAnimated: hasAnimated1, elementRef: introRef } = useInViewport();
  const { hasAnimated: hasAnimated2, elementRef: skillsRef } = useInViewport();
  return (
    <div className="home">
      <HeaderView />
      <div className={`intro ${hasAnimated1 ? "active" : ""}`} ref={introRef}>
        <h1>Welcome to My Blog</h1>
        <p>
          Hi, I'm John Doe, a passionate frontend developer. Here, I share
          articles, tutorials, and insights about web development, coding
          practices, and more.
        </p>
      </div>
      <div className={`skills ${hasAnimated2 ? "active" : ""}`} ref={skillsRef}>
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
      <div className="latest-articles">
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
      <div className="social">
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
