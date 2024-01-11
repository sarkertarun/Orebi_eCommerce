import Header from "./Layouts/Header"
import Footer from "./Layouts/Footer"
import Category from "./Layouts/Category"
import { Outlet } from "react-router-dom"

const RouteLayouts = () => {
  return (
    <>
    <Header/>
    <Category/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RouteLayouts