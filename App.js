import React,{lazy, Suspense, useContext, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contactus from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
import Menu from "./src/components/Menu";
import UserContext from "./src/utils/userContext";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";


const Grocery = lazy(()=>import("./src/components/Grocery"))

const AppLayout = () =>{

    const [userName, setUserName] = useState();

        useEffect(()=>{
            // make a api call and get username 
            setUserName("Kumar");
        },[]);
    return (
    
        <Provider store={appStore}>
            <UserContext.Provider value={{LoggedInUser: userName,setUserName}}>
                    <div>
                        <Header/>
                    <Outlet/>
                    </div>
            </UserContext.Provider>
        </Provider>
    )}

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
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
            }
        ]
    }])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);
