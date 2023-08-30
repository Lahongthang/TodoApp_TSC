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
    navbar: {
        home: 'Home',
        settings: 'Settings',
    },
    EmailConfimation: {
        title: 'Confirm email',
        desc: 'Let us know that this email address belongs to you. Enter the code from the email sent to <custom>{{email}}</custom>',
        sendCodeAgain: 'Send code again',
        cancelBtn: 'Cancel',
        confirmBtn: {
            content: 'Confirm',
            loadingIndicator: 'Confirming...',
        },
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
        createAccount: {
            title: 'Create new account',
            haveAccount: 'Already have an account? <custom>{{action}}</custom>',
            signIn: 'Sign In',
            form: {
                username: 'User name',
                email: 'Email address',
                password: 'Password',
                confirmPassword: 'Confirm password',
                registerBtn: {
                    content : 'Create account',
                    loadingIndicator: 'Creating...',
                },
            },
        },
        verifyEmail: {
            title: 'Verify email',
            desc: 'Let us know that this email address belongs to you. Enter the code from the email sent to <custom>{{email}}</custom>',
            form: {
                verifyCode: 'Verification code',
                sendCodeAgain: 'Send code again',
                changeEmail: 'Change email',
                submitBtn: {
                    content: 'Verify',
                    loadingIndicator: 'Verifying...',
                },
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
            verifyCode: {
                required: 'Please enter verification code',
                valid: 'Verification code must be 6 characters',
            },
        },
        notifications: {
            registerSuccessed: 'Create account successfully!',
            registerFailed: 'Create account failed!'
        }
    },
    resetPassword: {
        pageTitle: 'Reset Password',
        findAccount: {
            title: 'Find your account',
            desc: 'Please enter your email address to search for your account.',
            form: {
                email: 'Email address',
                submitBtn: {
                    content: 'Search',
                    loadingIndicator: 'Searching...',
                },
                signIn: 'Sign In',
            },
        },
        verifyEmail: {
            title: 'Verify email address',
            desc: 'Let us know that this email address belongs to you. Enter the code from the email sent to <custom>{{email}}</custom>',
            form: {
                verifyCode: 'Verification code',
                sendCodeAgain: 'Send code again',
                changeEmail: 'Change email',
                submitBtn: {
                    content: 'Verify',
                    loadingIndicator: 'Verifying...',
                },
            },
        },
        changePassword: {
            title: 'Change password',
            desc: 'Enter your new password to change',
            form: {
                newPassword: 'New password',
                confirmPassword: 'Confirm password',
                submitBtn: {
                    content: 'Change',
                    loadingIndicator: 'Changing...',
                },
            },
        },
        validations: {
            email: {
                required: 'Please enter email address',
                valid: 'Email must be a valid email address',
            },
            verifyCode: {
                required: 'Please enter verification code',
                valid: 'Verification code must be 6 characters',
            },
            newPassword: {
                required: 'Please enter new password',
                min: 'Password must be at least 8 characters',
            },
            confirmPassword: {
                required: 'Please enter confimation password',
                match: 'Password do not matchs',
            },
        },
        completeCard: {
            cardTitle: 'Completed',
            title: 'Reset password successfully!',
            actions: {
                signIn: 'Sign In',
                createNewAccount: 'Create new account',
            },
        },
    },
    personalSettings: {
        pageTitle: 'Personal Settings',
        header: {
            heading: 'Personal Settings',
        },
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
            title: 'Email',
            form: {
                oldEmail: 'Old email',
                newEmail: 'New email',
                updateBtn: {
                    content: 'Save changes',
                    loadingIndicator: 'Saving...',
                },
            },
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
            oldEmail: {
                required: 'Please enter old email address',
                valid: 'Email must be a valid email address',
            },
            newEmail: {
                required: 'Please enter new email address',
                valid: 'Email must be a valid email address',
            },
            confirmCode: {
                required: 'Please enter verification code'
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
            changeEmailSuccessed: 'Change email successfully!',
            changeEmailFailed: 'Change email failed!',
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
            custom: {
                title: 'Select time',
                from: 'From',
                to: 'To',
                resetBtn: 'Reset',
                applyBtn: 'Apply',
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
        header: {
            heading: 'Issue Management',
        },
        CreateUpdateIssueDialog: {
            title: {
                add: 'Add new issue',
                update: 'Edit issue',
            },
            form: {
                title: 'Title',
                type: 'Type',
                status: 'Status',
                priority: 'Priority',
                assignee: 'Assignee',
                assignToMySelf: 'Assign to myself',
                startDate: 'Start date',
                endDate: 'End date',
                description: 'Description',
                descDescription: 'Please enter description in the comments',
                cancelBtn: 'Cancel',
                updateBtn: {
                    content: 'Update',
                    loadingIndicator: 'Updating...',
                },
                addBtn: {
                    content: 'Add',
                    loadingIndicator: 'Adding...',
                }
            },
        },
        addIssueBtn: 'Add',
        menu: {
            edit: 'Edit',
            delete: 'Delete',
        },
        confirmDialog: {
            title: 'Are you sure to delete this issue?',
            content: 'This issue will be deleted',
            cancelBtn: 'Cancel',
            deleteBtn: 'Delete',
        },
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
            resetBtn: 'Reset',
            searchPlaceholder: 'Enter keyword here',
        },
        validations: {
            title: 'Please enter title',
            type: 'Please select type',
            status: 'Please select status',
            priority: 'Please select priority',
            assignee: 'Please select assignee',
            startDate: 'Please enter start date',
            endDate: 'Please enter end date',
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
    page404: {
        pageTitle: '404 Page not found',
        error: 'Sorry, page not found!',
        message: `Sorry, we couldn’t find the page you’re looking for.Perhaps you’ve mistyped the URL? Be sure to check your spelling.`,
        goToHome: 'Go to Home',
    },
}

export default en;
