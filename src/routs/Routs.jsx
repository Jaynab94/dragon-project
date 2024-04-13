import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRouts from "./PrivateRouts/PrivateRouts";





const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },

            {
                path: '/news/:id',
                element: <PrivateRouts><NewsDetails></NewsDetails></PrivateRouts>

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;