import { createBrowserRouter } from "react-router-dom";
import Start from "../Features/Home/Start";
import Home from "../Features/Home/Home";
import UserLogin from "../Features/Auth/Pages/UserLogin";
import UserSignup from "../Features/Auth/Pages/UserSignup";
import CaptainRegister from "../Features/Auth/Pages/CaptainRegister";
import CaptainLogin from "../Features/Auth/Pages/CaptainLogin";
import ProtectedWrapper from "./protectedWrapper";

export const router = createBrowserRouter([
    {
        path:'/Start',
        element:<Start/>
    },
    {
        path:'/',
        element:<ProtectedWrapper>
            <Home/>
        </ProtectedWrapper>
    },
    {
        path:'/user-login',
        element:<UserLogin/>
    },
    {
        path:'/user-signup',
        element:<UserSignup/>
    },
    {
        path:'/captain-signup',
        element:<CaptainRegister/>
    },
    {
        path:'/captain-login',
        element:<CaptainLogin/>
    }
])