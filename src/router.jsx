import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Card from "./pages/Card"
import Service from "./pages/Service";
import BaykotKg from "./pages/BaykotKg";
import Cart from "./pages/Cart"


export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"about",
                element:<About />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"*",
                element:<NotFound />
            },
            {
                path:"account",
                element:<Account />
            },
            {
                path:"card",
                element:<Card />
            },
            {
                path:"service",
                element:<Service />
            },
            {
                path:"baykotKg",
                element:<BaykotKg />
            },
            {
                path:"cart",
                element:<Cart />
            },
        ]
    }
])