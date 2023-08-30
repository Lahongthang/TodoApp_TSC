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
import { Page404 } from "../pages/errors";


export default function Router() {
    return useRoutes([
        {
            path: '',
            element: <ApplicationLayout />,
            children: [
                {
                    path: '',
                    element: <Navigate to={'home'} />,
                },
                {
                    path: 'home',
                    element: <AuthGuard>
                        <IssuesPage />
                    </AuthGuard>,
                },
                {
                    path: 'personal-settings',
                    element: <AuthGuard>
                        <PersonalSettingPage />
                    </AuthGuard>,
                },
                {
                    path: 'login',
                    element: <GuestGuard redirectTo="/">
                        <LoginPage />
                    </GuestGuard>,
                },
                {
                    path: 'register',
                    element: <GuestGuard redirectTo="/">
                        <RegisterPage />
                    </GuestGuard>,
                },
                {
                    path: 'reset-password',
                    element: <GuestGuard redirectTo="/">
                        <ResetPasswordPage />
                    </GuestGuard>,
                },
            ]
        },
        {
            path: '*',
            children: [
                { path: '403', element: <>403 PAGE</> },
                { path: '404', element: <Page404 /> },
                { path: 'app-not-found', element: <>APP NOT FOUND</> },
                { path: '500', element: <>500 PAGE</> },
                { path: '*', element: <Navigate to={'/404'} replace /> }
            ]
        }
    ])
}
