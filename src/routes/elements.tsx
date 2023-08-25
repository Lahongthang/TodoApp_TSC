import React, { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component: React.ComponentType) => (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
    </Suspense>
)

// Auth
export const LoginPage = Loadable(lazy(() => import('../pages/login')))
export const RegisterPage = Loadable(lazy(() => import('../pages/register')))

// Reset password
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/reset-password')))

// Issue management
export const IssuesPage = Loadable(lazy(() => import('../pages/issues')))

// Personal settings
export const PersonalSettingPage = Loadable(lazy(() => import('../pages/personal-settings')))
