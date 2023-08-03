const en = {
    login: {
        title: 'Sign In',
        noAccount: 'New user? <custom>{{action}}</custom>',
        createAccount: 'Create an account',
        form: {
            username: 'User name or email address',
            password: 'Password',
            showPassword: 'Show',
            hidePassword: 'Hide',
            remember: 'Remember?',
            loginBtn: {
                content: 'Login',
                loadingIndicator: 'Logging in...',
            },
            forgotPassword: 'Forgot password?'
        },
        validations: {
            username: {
                required: 'Please enter user name',
                min: 'User name must be at least 6 characters',
            },
            password: {
                required: 'Please enter password',
                min: 'Password must be at least 8 characters',
            }
        },
        notifications: {
            loginSuccessed: 'Login successfully!',
            loginFailed: 'Login failed!',
            logoutSuccessed: 'Logout successfully!',
            logoutFailed: 'Logout failed!',
        }
    },
    register: {
        title: 'Create new account',
        haveAccount: 'Already have an account? <custom>{{action}}</custom>',
        signIn: 'Sign In',
        form: {
            username: 'User name',
            email: 'Email address',
            password: 'Password',
            confirmPassword: 'Confirm password',
            showPassword: 'Show',
            hidePassword: 'Hide',
            registerBtn: {
                content : 'Create account',
                loadingIndicator: 'Creating...',
            },
        },
        validations: {
            username: {
                required: 'Please enter user name',
                min: 'User name must be at least 6 characters',
            },
            email: {
                required: 'Please enter email address',
                valid: 'Email must be a valid email address',
            },
            password: {
                required: 'Please enter password',
                min: 'Password must be at least 8 characters',
            },
            confirmPassword: {
                required: 'Please enter confimation password',
                match: 'Password do not matchs',
            },
        },
        notifications: {
            registerSuccessed: 'Create account successfully!',
            registerFailed: 'Create account failed!'
        }
    },
    personalSettings: {
        general: {
            form: {
                username: 'User name',
                email: 'Email address',
                updateBtn: 'Save changes',
                allowed: 'Allowed *.jpeg, *.jpg, *.png',
                maxSize: 'max size of',
            },
        }
    }
}

export default en;
