import { Navigate, useRoutes } from "react-router-dom";
import ApplicationLayout from "../layouts";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import {
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    IssuesPage,
    PersonalSettingPage,
} from './elements'


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
            path: 'reset-password',
            element: <GuestGuard redirectTo="/">
                <ResetPasswordPage />
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
                {
                    path: 'personal-settings',
                    element: <PersonalSettingPage />
                },
            ],
        },
    ])
}
