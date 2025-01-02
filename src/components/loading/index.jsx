// Loading.jsx
import React, { useState, useEffect } from "react";
import "./index.css";

const Loading = () => {
  const [status, setStatus] = useState("enter"); // 动画状态：enter, loading, exit

  useEffect(() => {
    if (status === "enter") {
      // 进场动画
      const timer = setTimeout(() => {
        setStatus("loading"); // 进场动画完成后切换到加载中状态
      }, 1000); // 进场动画持续1秒钟

      return () => clearTimeout(timer);
    }

    if (status === "loading") {
      // 模拟加载过程，保持加载状态
      const timer = setTimeout(() => {
        setStatus("exit"); // 加载完成后切换到出场动画
      }, 2000); // 假设加载过程持续2秒钟

      return () => clearTimeout(timer);
    }

    if (status === "exit") {
      // 出场动画
      const timer = setTimeout(() => {
        setStatus("exitComplete");
      }, 1000); // 出场动画持续1秒钟

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className={`loading-container ${status}`}>
      {status === "loading" && <div className="loading-text">加载中...</div>}
      {status !== "loading" && <div className="overlay"></div>}
    </div>
  );
};

export default Loading;
