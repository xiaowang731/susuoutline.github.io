import { useRef, useEffect } from "react";
import styles from "./skills.module.scss";
import { updataMap, updataStyles } from "@/utils/utils";
const list = [
  { id: "001", content: "JavaScript (ES6+)", color: "#981b7d" },
  { id: "002", content: "React.js", color: "#6dba14" },
  { id: "003", content: "HTML5 & CSS3", color: "#313e22" },
  { id: "004", content: "Node.js", color: "#c44924" },
  { id: "005", content: "JGit & GitHub", color: "#1212ce" },
  { id: "006", content: "JavaScript (ES6+)", color: "#981b7d" },
  { id: "007", content: "React.js", color: "#6dba14" },
  { id: "008", content: "HTML5 & CSS3", color: "#313e22" },
  { id: "009", content: "Node.js", color: "#c44924" },
  { id: "010", content: "JGit & GitHub", color: "#1212ce" },
];
const Skills = () => {
  // 获取元素
  const elementRefs = useRef([]);
  const playGroundReact = useRef();
  const showListBox = useRef();
  const titleRef = useRef();
  // 在渲染时为每个元素绑定 ref
  useEffect(() => {
    elementRefs.current.unshift(titleRef.current);
    // 传递数值
    updataMap(
      playGroundReact.current,
      elementRefs.current,
      showListBox.current
    );
    window.addEventListener("scroll", updataStyles);
  }, []);

  return (
    // 背景盒子
    <div className={styles.playground} ref={playGroundReact}>
      {/* 展示盒子 */}
      <div className={styles.skills_list} ref={showListBox}>
        {/* 展示内容 */}
        <h2 ref={titleRef}>My Skills</h2>
        <ul className={styles.skills_list_item}>
          {list.map((item, index) => {
            return (
              <li
                key={item.id}
                ref={(el) => (elementRefs.current[index] = el)}
                data-order={index}
                style={{ backgroundColor: item.color }}
                className={styles.skills_list_items}
              >
                {item.content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Skills;
