import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import DashBoard from "../layouts/DashBoard";
import Enrolled from "../pages/DashBoard/User/Enrolled/Enrolled";
import Payment from "../pages/DashBoard/User/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/User/PaymentHistory/PaymentHistory";
import Selected from "../pages/DashBoard/User/Selected/Selected";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // User dashboard
            {
                path: 'user/enrolled',
                element: <Enrolled></Enrolled>
            },
            {
                path: 'user/payment',
                element: <Payment></Payment>
            },
            {
                path: 'user/payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'user/selected',
                element: <Selected></Selected>
            }
        ]
    }
]);

export default router;