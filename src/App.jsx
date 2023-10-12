import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TransactionPage from "./Pages/TransactionPage/TransactionPage";
import Support from "./Pages/Support/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
