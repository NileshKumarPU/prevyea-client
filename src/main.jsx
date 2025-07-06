import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "../Layout.jsx";
import { BCA, SemOne,SemTwo,SemFour,Admin,ComingSoon,Login,Dashboard,Signup, About, CampusConnect} from "./Pages";
import { CookiesProvider } from "react-cookie";
import ForgotPass from "./components/ForgotPass.jsx";



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
        path: "signup",
        element: <Signup/>,
        
      },
      {
        path: "/login",
        element: <Login/>,
        
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path: "/campus",
        element: <CampusConnect/>,
        
      },
      {
        path: "/forgotpass",
        element: <ForgotPass/>,
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
  <CookiesProvider>

    <RouterProvider router={router} />
  </CookiesProvider>
    
    
 
);
