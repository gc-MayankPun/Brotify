import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/Layouts/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [{}],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
