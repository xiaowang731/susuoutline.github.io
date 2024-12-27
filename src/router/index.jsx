// router/index.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "@/components/loading";
const Home = lazy(() => import("@/view/home/home"));
const Main = lazy(() => import("@/view/main/main"));
const NotFoundPage = lazy(() => import("@/components/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/susuoutline.github.io", // Ensure the base path is correct
    children: [
      {
        path: "", // 根路径，用于重定向到 home
        element: <Navigate to="main" />, // 重定向到 home
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "main",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Main />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading></Loading>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

export default router;
