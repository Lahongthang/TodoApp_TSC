import { Navigate, useRoutes } from "react-router-dom";
import ApplicationLayout from "../layouts";
import ColorsPage from "../pages/colors";
import IssuesPage from "../pages/issues";
import LoginPage from "../pages/login";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import RegisterPage from "../pages/register";
import PersonalSettingPage from "../pages/personal-settings";

export default function Router() {
    return useRoutes([
        {
            path: 'login',
            element: <GuestGuard redirectTo="/">
                <LoginPage />
            </GuestGuard>
        },
        {
            path: 'register',
            element: <GuestGuard redirectTo="/">
                <RegisterPage />
            </GuestGuard>
        },
        {
            path: '',
            element: <AuthGuard>
                <ApplicationLayout />
            </AuthGuard>,
            children: [
                {
                    path: '',
                    element: <Navigate to={'home'} />
                },
                {
                    path: 'home',
                    element: <IssuesPage />
                },
                // {
                //     path: 'issues-management',
                //     element: <IssuesPage />,
                // },
                // {
                //     path: 'colors',
                //     element: <ColorsPage />
                // },
                {
                    path: 'personal-settings',
                    element: <PersonalSettingPage />
                },
            ],
        },
    ])
}
