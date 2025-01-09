import styles from "./headerView.module.scss";
import { useNavigate } from "react-router-dom";
import moreSvg from "@/assets/more.svg";
import { Drawer } from "antd";
import { useState } from "react";

const headerList = [
  { id: "001", title: "主页", to: "/susuoutline.github.io" },
  { id: "002", title: "知识库", to: "/susuoutline.github.io/knowledgeBase" },
];
const HeaderView = () => {
  // 抽屉自定义类名
  const classNames = {
    mask: styles["my-drawer-mask"],
    content: styles["my-drawer-content"],
  };
  // 抽屉自定义样式
  const drawerStyles = {
    mask: {
      backdropFilter: "blur(10px)",
    },
    content: {
      backgroundColor: "#F4F2EC",
    },
  };

  // 编程式导航按钮
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // 编程式导航按钮
  const handleButtonClick = (to) => {
    // 使用 navigate 进行路由跳转
    navigate(to);
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
        <img
          onClick={showDrawer}
          src={moreSvg}
          className={styles["more-svg"]}
          alt="展开"
        />
      </nav>
      {/* 抽屉 */}
      <Drawer
        title="DevCraft"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        width={240}
        classNames={classNames}
        styles={drawerStyles}
      >
        {headerList.map((list, index) => {
          return (
            <div
              key={list.id}
              className={styles["list-nav"]}
              onClick={() => handleButtonClick(list.to)}
            >
              {list.title}
            </div>
          );
        })}
      </Drawer>
    </header>
  );
};

export default HeaderView;
