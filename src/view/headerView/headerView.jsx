import { Link } from "react-router-dom";
import "./headerView.scss";
import logo from "@/assets/logo.jpg";
const headerView = () => {
  return (
    <div className="headerView">
      <Link className="header-left" to="/susuoutline.github.io/">
        <i>S</i>
        <span>Susu Blog</span>
      </Link>
      <div className="header-right">
        <Link to="/susuoutline.github.io/home">我的资料库</Link>
      </div>
    </div>
  );
};

export default headerView;
