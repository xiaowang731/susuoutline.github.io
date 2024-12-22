import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import Loading from "@/components/loading/index";
import { useState, useEffect } from "react";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // 模拟 API 请求
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        setShowLoading(false); // 加载完成，隐藏加载动画
      } catch (error) {
        console.error("Error fetching data", error);
        setShowLoading(false);
      }
    };

    fetchData();
  }, []); // 组件挂载时执行一次

  return (
    <div>
      {showLoading ? (
        <Loading></Loading>
      ) : (
        <RouterProvider
          basename="/susuoutline.github.io"
          router={router}
        ></RouterProvider>
      )}
    </div>
  );
};
export default App;
