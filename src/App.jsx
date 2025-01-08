// App.js
import { RouterProvider } from "react-router-dom";
import router from "@/router/index";
import "./App.scss";
import { useLayoutEffect } from "react";

const App = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // 页面加载时滚动到顶部
  }, []);
  return (
    <div className="main-body">
      <RouterProvider router={router} basename="/susuoutline.github.io" />
    </div>
  );
};

export default App;
