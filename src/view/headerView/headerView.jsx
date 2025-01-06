import React from "react";
import { Link } from "react-router-dom";
import "./headerView.scss";

function HeaderView() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/susuoutline.github.io/">My Blog</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/susuoutline.github.io/">Home</Link>
          </li>
          <li>
            <Link to="/susuoutline.github.io/KnowledgeBase">
              Knowledge Base
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderView;
