import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}){
    return(
        <>
        <Navbar/>
        <main id="main_part">{children}</main>
        <Footer/>
        </>
    )
}