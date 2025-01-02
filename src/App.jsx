// App.js
import { RouterProvider } from "react-router-dom";
import router from "@/router/index";
import "./App.scss";

const App = () => {
  return (
    <div className="main-body">
      <RouterProvider router={router} basename="/susuoutline.github.io" />
    </div>
  );
};

export default App;
