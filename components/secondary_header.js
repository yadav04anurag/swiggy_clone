import { Outlet } from "react-router"
import SwiggyHeader from "./swiggy_header"
export default function Secondary_header(){
    return(
        <>
        <SwiggyHeader></SwiggyHeader>
        <Outlet></Outlet>
        </>
    )
}