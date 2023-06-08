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
import DBHome from "../pages/DashBoard/DashBoard/DBHome";
import ManageUsers from "../pages/DashBoard/Admin/ManageUser/ManageUsers";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/DashBoard/Instructor/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AllClass from "../pages/DashBoard/Instructor/AllClass/AllClass";



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
            {
                path: 'home',
                element: <DBHome></DBHome>
            },
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
            },
            // Admin Routes
            {
                path: 'admin/manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'admin/manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // Instructor Routes
            {
                path:'instructor/add-class',
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'instructor/all-class',
                element:<InstructorRoute><AllClass></AllClass></InstructorRoute>
            }
        ]
    }
]);

export default router;