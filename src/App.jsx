// App.js
import { RouterProvider } from "react-router-dom";
import router from "@/router/index";
import Loading from "@/components/loading/index";
import { useState, useEffect } from "react";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        setShowLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setShowLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {showLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={router} basename="/susuoutline.github.io" />
      )}
    </div>
  );
};

export default App;
