import { Link } from "react-router-dom";
import "./headerView.scss";
const headerView = () => {
  return (
    <div className="headerView">
      <Link className="header-left" to="/susuoutline.github.io/">
        <i>S</i>
        <span>Susu Blog</span>
      </Link>
      <div className="header-right">
        <Link to="/susuoutline.github.io/home">
          <button>首页</button>
        </Link>
        <Link to="/susuoutline.github.io/knowledgeBase">我的资料库</Link>
      </div>
    </div>
  );
};

export default headerView;
