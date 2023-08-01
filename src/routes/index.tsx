import { Navigate, useRoutes } from "react-router-dom";
import ApplicationLayout from "../layouts";
import ColorsPage from "../pages/colors";
import TodosPage from "../pages/todos";
import LoginPage from "../pages/login";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

export default function Router() {
    return useRoutes([
        {
            path: 'login',
            element: <GuestGuard redirectTo="/">
                <LoginPage />
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
                    element: <>Home page</>
                },
                {
                    path: 'todos',
                    element: <TodosPage />,
                },
                {
                    path: 'colors',
                    element: <ColorsPage />
                },
            ],
        },
    ])
}
