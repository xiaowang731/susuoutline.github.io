// router/index.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "@/components/loading";
import Home from "@/view/home/home";
import NotFoundPage from "@/components/NotFound/NotFound";
import BoxList from "@/view/Box/box";

const KnowledgeBase = lazy(() => import("@/view/knowledgeBase/knowledgeBase"));

const router = createBrowserRouter([
  {
    path: "/susuoutline.github.io", // Ensure the base path is correct
    children: [
      {
        path: "", // 根路径，用于重定向到 home
        element: <Navigate to="home" />, // 重定向到 home
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cs",
        element: <BoxList />,
      },
      {
        path: "knowledgeBase",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <KnowledgeBase />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
