import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
import LAYCSS from './Layout.module.css'

function Layout(){


    return(<div className={LAYCSS.PageContainer}>
        <Header></Header>
        <div className={LAYCSS.Content}> 
        <Outlet></Outlet>
        </div>
        <Footer></Footer>

    </div>)

}

export default Layout