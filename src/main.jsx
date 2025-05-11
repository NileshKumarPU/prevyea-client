import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "../Layout.jsx";
import { BCA, SemOne,SemTwo,SemFour,Admin,ComingSoon } from "./Pages";
import { Analytics } from "@vercel/analytics/react"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bca",
        element: <BCA />,
      },
      {
        path: "regular",
        element: <ComingSoon/>,
      },
      {
        path: "bca/SemOne",
        element: <SemOne/>,
        
      },
      {
        path: "bca/SemTwo",
        element: <SemTwo/>,
        
      },
      {
        path: "bca/SemThree",
        element: <ComingSoon/>,
        
      },
      {
        path: "bca/SemFour",
        element: <SemFour/>,
        
      },
      {
        path: "bca/SemFive",
        element: <ComingSoon/>,
        
      },
      {
        path: "bca/SemSix",
        element: <ComingSoon/>,
        
      },
      {
        path: "/admin",
        element: <Admin/>,
        
      },
      {
        path: "/signup",
        element: <ComingSoon/>,
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);
