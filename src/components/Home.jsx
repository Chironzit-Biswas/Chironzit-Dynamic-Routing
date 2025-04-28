import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer.jsx";

export const Home = () => {
    return (
        <>
           <div className={'mx-auto max-w-6xl '}>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>

           </div>
        </>
    )
}