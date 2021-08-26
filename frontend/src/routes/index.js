import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import ResetPasswordConfirm from "../Pages/Auth/ResetPasswordConfirm";
import Activate from "../Pages/Auth/Activate";
import PreferenceSelector from '../Pages/PreferenceSelector';
import CheckEmail from "../Pages/Auth/CheckEmail";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
    {
        path: "/",
        component: Login,
        title: "Auth",
    },
    {
        path: "/selectPreferences",
        component: PreferenceSelector,
        title: "EdTech",
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        title: "ResetPassword",
    },
    {
        path: "/password/reset/confirm/:uid/:token",
        component: ResetPasswordConfirm,
        title: "ResetPasswordConfirm",
    },
    {
        path: "/activate/:uid/:token",
        component: Activate,
        title: "Activate",
    },
    {
        path: "/check-email",
        component: CheckEmail,
        title: "Activate",
    },
    {
        path: "/select-preferences",
        component: PreferenceSelector,
        title: "Select",
    },
    {
        path: '/:protectedRoutes',
        component: ProtectedRoutes,
        title: "protected"
    },
]