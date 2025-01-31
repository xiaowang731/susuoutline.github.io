import styles from "./knowledgeBase.module.scss"; // 样式文件
import LeftImg from "@/assets/zuo.svg";
import RightImg from "@/assets/you.svg";
import HeaderView from "@/view/headerView/headerView";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

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

  const location = useLocation(); // 获取当前路由位置
  const navigate = useNavigate();

  // 获取所有的markdown文件并生成按钮列表
  useEffect(() => {
    const buttonList = [];
    const routeMap = {};

    for (const path in markdownFiles) {
      const fileName = path.split("/").pop().replace(".md", "");
      const route = fileName.toLowerCase().replace(/\s+/g, "-");
      buttonList.push({ name: fileName, route });
      routeMap[route] = path;
    }

    setButtons(buttonList);
    setRouteMapping(routeMap);
    localStorage.setItem("routeMapping", JSON.stringify(routeMap));

    // 如果当前在根路径，自动重定向到第一个文档
    if (location.pathname === '/susuoutline.github.io/knowledgeBase' && buttonList.length > 0) {
      navigate(`/susuoutline.github.io/knowledgeBase/${buttonList[0].route}`);
    }
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
            {buttons.map((button) => {
              const linkPath = `/susuoutline.github.io/knowledgeBase/${button.route}`;
              const isActive = decodeURIComponent(location.pathname) === decodeURIComponent(linkPath);
              
              return (
                <li key={button.route}>
                  <Link
                    to={linkPath}
                    className={`${isActive ? styles.active : ''}`}
                  >
                    {button.name}
                  </Link>
                </li>
              );
            })}
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
