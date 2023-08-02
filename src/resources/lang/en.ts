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
            loginBtn: 'Login',
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
            successed: 'Login successfully!',
            failed: 'Login failed!'
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
            registerBtn: 'Create',
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
            successed: 'Create account successfully!',
            failed: 'Create account failed!'
        }
    }
}

export default en;
