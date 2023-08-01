import React, { ReactNode, useState } from "react";
import { useSelector } from "../app/store";
import { selectIsAuthenticated } from "../app/redux/auth/authSlice";
import { AuthState } from "../utils/types";
import LoginPage from "../pages/login";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
    children: ReactNode,
}

const AuthGuard: React.FC<Props> = ({ children }) => {
    const { pathname } = useLocation()
    const isAuthenticated = useSelector((state: AuthState) => selectIsAuthenticated(state))

    const [requestedLocation, setRequestedLocation] = useState<any>(null);

    if (!isAuthenticated) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <LoginPage />
    }
    if (requestedLocation && pathname !== requestedLocation) {
        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }
    return <>{children}</>
}

export default AuthGuard;
