import React, { ReactNode } from "react";
import { AuthState, RestProps } from "../utils/types";
import { useSelector } from "../app/store";
import { selectIsAuthenticated } from "../app/redux/auth/authSlice";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode,
    redirectTo?: string,
}

type GuestGuardProps = Props & RestProps

const GuestGuard: React.FC<GuestGuardProps> = ({ children, redirectTo = '/', ...props }) => {
    const isAuthenticated = useSelector((state: AuthState) => selectIsAuthenticated(state))
    console.log({isAuthenticated})
    if (isAuthenticated) return <Navigate to={redirectTo} {...props} />
    return <>{children}</>
}

export default GuestGuard;
