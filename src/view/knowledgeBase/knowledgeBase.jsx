import React, { useState } from "react";
import styles from "./knowledgeBase.module.scss"; // 样式文件
import LeftImg from "@/assets/zuo.svg";
import RightImg from "@/assets/you.svg";
import HeaderView from "@/view/headerView/headerView";
import HSJ from "./vue 原理总结.md";

const KnowledgeBase = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 控制左侧导航的展开/折叠

  // 切换导航栏展开/折叠状态
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles["home-container"]}>
      <HeaderView />
      <div className={styles["bottom-content"]}>
        <div
          className={`${styles.sidebar} ${
            isSidebarOpen ? "" : styles["sidebar-closed"]
          }`}
        ></div>

        <div className={styles["content-area"]}>
          <div className={styles["toggle-btn"]} onClick={toggleSidebar}>
            {isSidebarOpen ? <img src={LeftImg} /> : <img src={RightImg} />}
          </div>
          {/* 右侧内容区域 */}
          <div className={styles.content}></div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
