import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/view/home/home";
import Main from "@/view/main/main";
import NotFoundPage from "@/components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/", // 旧路径需要重定向
    element: <Navigate to="/home" />, // 重定向到 /home
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
