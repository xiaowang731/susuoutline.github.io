import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const btn = () => {
    navigate("/susuoutline.github.io/home");
  };
  return (
    <div>
      <div>付某是傻逼</div>
      <button onClick={btn}>去main</button>
    </div>
  );
};

export default Main;
