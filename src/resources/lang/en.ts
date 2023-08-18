const en = {
    account: {
        menuItems: {
            home: 'Home',
            settings: 'Settings',
            logout: 'Logout',
        },
        notifications: {
            logoutSuccessed: 'Logout successfully!',
            logoutFailed: 'Logout failed!',
        }
    },
    login: {
        pageTitle: 'Sign In',
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
        pageTitle: 'Register',
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
        confirmCard: {
            title: 'Confirm email',
            desc: 'Let us know that this email address belongs to you. Enter the code from the email sent to <custom>{{email}}</custom>',
            sendMailAgain: 'Send email again',
            updateInfoBtn: 'Update info',
            confirmBtn: {
                content: 'Confirm',
                loadingIndicator: 'Confirming...',
            },
        },
        completeCard: {
            cardTitle: 'Completed!',
            title: 'Create account successfully!',
            content: {
                username: 'User name: <custom>{{username}}</custom>',
                email: 'Email: <custom>{{email}}</custom>',
            },
            actions: {
                signIn: 'Sign In',
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
            confirmCode: {
                required: 'Please enter verification code',
            },
        },
        notifications: {
            registerSuccessed: 'Create account successfully!',
            registerFailed: 'Create account failed!'
        }
    },
    personalSettings: {
        pageTitle: 'Personal Settings',
        tabs: {
            general: 'General Info',
            email: 'Email',
            security: 'Security',
        },
        general: {
            title: 'General info',
            form: {
                username: 'User name',
                address: 'Address',
                phone: 'Phone',
                about: 'About',
                resetBtn: 'Reset',
                updateBtn: {
                    content: 'Save changes',
                    loadingIndicator: 'Saving...',
                },
                changeAvatarBtn: {
                    content: 'Change avatar',
                    loadingIndicator: 'Changing...',
                },
                allowed: 'Allowed *.jpeg, *.jpg, *.png',
                maxSize: 'max size of',
            },
        },
        email: {

        },
        security: {
            title: 'Security',
            form: {
                oldPassword: 'Old password',
                newPassword: 'New password',
                confirmPassword: 'Confirm new password',
                updateBtn: {
                    content: 'Save changes',
                    loadingIndicator: 'Saving...',
                },
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
            oldPassword: {
                required: 'Please enter old password',
            },
            newPassword: {
                required: 'Please enter new password',
                min: 'Password must be at least 8 characters',
            },
            confirmPassword: {
                required: 'Please enter confimation password',
                match: 'Password do not matchs',
            }
        },
        notifications: {
            updateInfoSuccessed: 'Update info successfully!',
            updateInfoFailed : 'Update info failed!',
            changePasswordSuccessed: 'Change password successfully!',
            changePasswordFailed: 'Change password failed!',
        }
    },
    filters: {
        filterTime: {
            options: {
                today: 'Today',
                thisWeek: 'This week',
                lastWeek: 'Last week',
                thisMonth: 'This month',
                lastMonth: 'Last month',
                custom: 'Custom',
            },
            label: 'Time: <custom>{{value}}</custom>',
            noneValue: 'None',
        },
        actions: {
            reset: 'Reset',
            apply: 'Apply',
        },
    },
    issues: {
        pageTitle: 'Issue Management',
        issueTypes: {
            task: 'Task',
            bug: 'Bug',
            request: 'Request',
            other: 'Other',
        },
        issueStatuses: {
            open: 'Open',
            inprogress: 'Inprogress',
            resolved: 'Resolved',
            closed: 'Closed',
        },
        issuePriorities: {
            low: 'Low',
            medium: 'Medium',
            high: 'High',
        },
        filters: {
            type: {
                label: 'Type: <custom>{{value}}</custom>',
                title: 'Select type',
            },
            priority: {
                label: 'Priority: <custom>{{value}}</custom>',
                title: 'Select priority',
            },
            assignee: {
                label: 'Assignee: <custom>{{value}}</custom>',
                title: 'Select user',
            },
            noneValue: 'None',
        },
        notifications: {
            createIssueSuccessed: 'Create issue successfully!',
            createIssueFailed: 'Create issue failed!',
            updateIssueSuccessed: 'Update issue successfully!',
            updateIssueFailed: 'Update issue failed!',
            deleteIssueSuccessed: 'Delete issue successfully!',
            deleteIssueFailed: 'Delete issue failed!',
        },
    },
}

export default en;
