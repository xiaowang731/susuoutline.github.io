import { useRef, useEffect } from "react";
import styles from "./skills.module.scss";
import { updataMap, updataStyles } from "@/utils/utils";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiWebpack,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
const list = [
  {
    id: "001",
    content: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },
  {
    id: "002",
    content: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    id: "003",
    content: "Vue",
    icon: <FaVuejs />,
    color: "#4FC08D",
  },
  {
    id: "004",
    content: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
  },
  {
    id: "005",
    content: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    id: "006",
    content: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
  },
  {
    id: "007",
    content: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
  },
  {
    id: "008",
    content: "Sass",
    icon: <FaSass />,
    color: "#CC6699",
  },
  {
    id: "009",
    content: "TailwindCSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    id: "010",
    content: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
  },
  {
    id: "011",
    content: "Webpack",
    icon: <SiWebpack />,
    color: "#8DD6F9",
  },
  {
    id: "012",
    content: "Vite",
    icon: <SiVite />,
    color: "#646CFF",
  },
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
                <span className={styles.icon}>{item.icon}</span>
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
