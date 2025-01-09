import styles from "./headerView.module.scss";
import { useNavigate } from "react-router-dom";

const headerList = [
  { id: "001", title: "主页", to: "/susuoutline.github.io" },
  { id: "002", title: "知识库", to: "/susuoutline.github.io/knowledgeBase" },
];

function HeaderView() {
  const navigate = useNavigate();

  const handleButtonClick = (to) => {
    // 使用 navigate 进行路由跳转
    navigate(to); // 跳转到 /new-page 页面
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DevCraft</div>
      <nav className={styles.nav}>
        {headerList.map((list, index) => {
          return (
            <div
              key={list.id}
              className={styles["list-nav"]}
              style={{ "--i": index }}
              onClick={() => handleButtonClick(list.to)}
            >
              {list.title}
            </div>
          );
        })}
      </nav>
    </header>
  );
}

export default HeaderView;
