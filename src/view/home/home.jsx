import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const btn = () => {
    navigate("/susuoutline.github.io/main");
  };
  return (
    <div className="content">
      <h1>欢迎来到我的页面！</h1>
      <p>页面加载完成后显示的内容。</p>
      <button onClick={btn}>去main</button>
    </div>
  );
};

export default Home;
