import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/assets/loading.json"; // 引入你的动画 JSON 文件
import "./index.css";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // 自动播放
    animationData: animationData, // 动画数据
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
