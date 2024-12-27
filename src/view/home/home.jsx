import "./home.scss";
import { Outlet } from "react-router-dom";
import NavMenu from "./menu/menu";
import HeaderView from "@/view/headerView/headerView";

const Home = () => {
  return (
    <div className="contents">
      <div className="view-header">
        <HeaderView />
      </div>
      <div className="panel-contents">
        <div className="panel-menu">
          <NavMenu />
        </div>
        <div className="panel-show">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
