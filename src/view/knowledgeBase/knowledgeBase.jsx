import styles from "./knowledgeBase.module.scss"; // 样式文件
import LeftImg from "@/assets/zuo.svg";
import RightImg from "@/assets/you.svg";
import HeaderView from "@/view/headerView/headerView";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

// 假设 markdown 文件导入
const markdownFiles = import.meta.glob("/src/markdowns/**/*.md");

const KnowledgeBase = () => {
  // 控制左侧导航的展开/折叠
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 切换导航栏展开/折叠状态
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [buttons, setButtons] = useState([]); // 存储所有按钮
  const [routeMapping, setRouteMapping] = useState({}); // 路由和文件名的映射

  // 获取所有的markdown文件并生成按钮列表
  useEffect(() => {
    const buttonList = [];
    const routeMap = {};

    for (const path in markdownFiles) {
      const fileName = path.split("/").pop().replace(".md", "");
      // 简化路由生成逻辑，避免随机字符可能导致的问题
      const route = fileName.toLowerCase().replace(/\s+/g, "-");
      buttonList.push({ name: fileName, route });
      routeMap[route] = path;
    }

    setButtons(buttonList);
    setRouteMapping(routeMap);
    localStorage.setItem("routeMapping", JSON.stringify(routeMap));
  }, []);

  return (
    <div className={styles["home-container"]}>
      <HeaderView />
      <div className={styles["bottom-content"]}>
        <div
          className={`${styles.sidebar} ${
            isSidebarOpen ? "" : styles["sidebar-closed"]
          }`}
        >
          {/* 标题内容 */}
          <ul>
            {buttons.map((button) => (
              <li key={button.route}>
                <Link
                  to={`/susuoutline.github.io/knowledgeBase/${button.route}`}
                >
                  {button.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["content-area"]}>
          <div className={styles["toggle-btn"]} onClick={toggleSidebar}>
            {isSidebarOpen ? <img src={LeftImg} /> : <img src={RightImg} />}
          </div>
          {/* 右侧内容区域 */}
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
