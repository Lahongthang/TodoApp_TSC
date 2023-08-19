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
    id: string,
    username: string,
    email: string,
    avatar: string,
    phone: string,
    address: string,
    about: string,
}

// snackbar
export type Snackbar = {
    HIDE_DURATION: number,
    ANCHOR_VERTICAL: "top" | "bottom",
    ANCHOR_HORIZONTAL: "center" | "left" | "right",
}
