import { createBrowserRouter } from "react-router-dom";
import Start from "../Features/Home/Start";
import Home from "../Features/Home/Home";
import UserLogin from "../Features/Auth/Pages/UserLogin";
import UserSignup from "../Features/Auth/Pages/UserSignup";
import CaptainRegister from "../Features/Auth/Pages/CaptainRegister";
import CaptainLogin from "../Features/Auth/Pages/CaptainLogin";
import ProtectedWrapper from "./protectedWrapper";
import UserLogOut from "../Features/Auth/Pages/UserLogOut";
import CaptainLogout from "../Features/Auth/Pages/captainLogout";
import CaptainHome from "../Features/Home/CaptainHome";
import CaptainProtectedWrapper from "./CaptainProtectedWrapper";
import Riding from "../Features/Home/Components/User/Riding";
import CaptainProfile from "../Features/Home/CaptainProfile";

export const router = createBrowserRouter([
  {
    path: "/Start",
    element: <Start />,
  },
  {
    path: "/",
    element: (
      <ProtectedWrapper>
        <Home />
      </ProtectedWrapper>
    ),
  },
  {
    path: "/user/login",
    element: <UserLogin />,
  },
  {
    path: "/user/signup",
    element: <UserSignup />,
  },
  {
    path: "/captain/signup",
    element: <CaptainRegister />,
  },
  {
    path: "/captain/login",
    element: <CaptainLogin />,
  },
  {
    path: "/user/logout",
    element: <UserLogOut />,
  },
  {
    path: "/captain/logout",
    element: (
      <CaptainProtectedWrapper>
        <CaptainLogout />
      </CaptainProtectedWrapper>
    ),
  },
  {
    path: "/captain/home",
    element: (
      <CaptainProtectedWrapper>
        <CaptainHome />
      </CaptainProtectedWrapper>
    ),
  },
  {
    path: "/user/riding",
    element: (
      <ProtectedWrapper>
        <Riding />
      </ProtectedWrapper>
    ),
  },
  {
    path:'/captain/profile',
    element:<CaptainProtectedWrapper>
        <CaptainProfile/>
    </CaptainProtectedWrapper>
  }
]);
