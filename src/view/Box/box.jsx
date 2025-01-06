import React, { useState, useEffect, useRef } from "react";
import "./Box.scss";

const Box = ({ index, scrollPosition }) => {
  const boxRef = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    // 获取盒子的初始位置
    const offsetTop = boxRef.current.offsetTop;

    // 计算盒子应当根据滚动条的位置进行的变化
    const scrollOffset = scrollPosition - offsetTop;
    const scale = Math.min(1 + scrollOffset / 500, 2); // 放大效果，限制最大放大比例为2
    const translateY = scrollOffset * 0.2; // 向下滚动时盒子会向下平移
    const opacity = Math.min(Math.max(1 - Math.abs(scrollOffset) / 400, 0), 1); // 随滚动渐变透明度

    setStyle({
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: opacity,
      transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
    });
  }, [scrollPosition, index]);

  return (
    <div ref={boxRef} className={`box box-${index}`} style={style}>
      Box {index}
    </div>
  );
};

const BoxList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 监听滚动条的位置
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // 获取当前滚动条位置
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="box-container">
      {boxes.map((index) => (
        <Box key={index} index={index} scrollPosition={scrollPosition} />
      ))}
    </div>
  );
};

export default BoxList;
