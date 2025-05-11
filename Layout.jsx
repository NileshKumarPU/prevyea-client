import { Outlet } from "react-router-dom";
import { Footer, Header } from "./src/components";
import { Analytics } from "@vercel/analytics/react"


export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Analytics/>
        </>
    )
}