export type RestProps = {
    [key: string]: any,
}

// auth
export type AuthState = {
    auth: {
        user: User | null,
        isAuthenticated: boolean,
        token: {
            accessToken: string,
            expiresAt: Date | null,
        } | null,
        loggedInAt: Date | null,
        loggedOutAt: Date | null,
    }
}

type User = {
    _id: string,
    username: string,
    email: string,
}
