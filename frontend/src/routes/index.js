import Login from "../Pages/Auth/Login";
import ResetPassword from "../Pages/Auth/ResetPassword";
import ResetPasswordConfirm from "../Pages/Auth/ResetPasswordConfirm";
import Activate from "../Pages/Auth/Activate";
import Timetable from "../Pages/Timetable";
import Portion from "../Pages/Portion";
import Textbook from "../Pages/Textbook";
import Notes from "../Pages/Notes";
import Recommendation from "../Pages/Recommendations";
import Faculty from "../Pages/Faculty";
import About from "../Pages/AboutCollege";
import User from "../Pages/User";
import PreferenceSelector from '../Pages/PreferenceSelector';
import CheckEmail from "../Pages/Auth/CheckEmail";

export const routes = [
    {
        path: "/",
        component: Login,
        title: "Auth",
        needsAuth: false,
    },
    {
        path: "/selectPreferences",
        component: PreferenceSelector,
        title: "EdTech",
        needsAuth: true,

    },
    {
        path: "/timetable",
        component: Timetable,
        title: "Timetable",
        needsAuth: true,
    },
    {
        path: "/portion",
        component: Portion,
        title: "Portion",
        needsAuth: true,
    },
    {
        path: "/textbook",
        component: Textbook,
        title: "Textbook",
        needsAuth: true,
    },
    {
        path: "/notes",
        component: Notes,
        title: "Notes",
        needsAuth: true,
    },
    {
        path: "/recommendation",
        component: Recommendation,
        title: "Recommendation",
        needsAuth: true,
    },
    {
        path: "/faculty",
        component: Faculty,
        title: "Faculty",
        needsAuth: true,
    },
    {
        path: "/about",
        component: About,
        title: "About",
        needsAuth: true,
    },
    {
        path: "/user",
        component: User,
        title: "User",
        needsAuth: true,
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        title: "ResetPassword",
        needsAuth: false,
    },
    {
        path: "/password/reset/confirm/:uid/:token",
        component: ResetPasswordConfirm,
        title: "ResetPasswordConfirm",
        needsAuth: false,
    },
    {
        path: "/activate/:uid/:token",
        component: Activate,
        title: "Activate",
        needsAuth: false,
    },
    {
        path: "/check-email",
        component: CheckEmail,
        title: "Activate",
        needsAuth: false,
    },
]