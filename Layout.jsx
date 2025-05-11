import { Outlet } from "react-router-dom";
import { Footer, Header } from "./src/components";


export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}