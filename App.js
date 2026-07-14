import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contactus from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
import Menu from "./src/components/Menu";

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
    )
}
const appRoute = createBrowserRouter([
    {
        path :"/",
        element : <AppLayout/>,
        errorElement: <ErrorPage />,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <AboutUs/>
            },
            {
                path : "/contact",
                element : <Contactus/>
            },
            {
                path : "/menu/:resId",
                element : <Menu/>
            }
        ]
    }])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);
