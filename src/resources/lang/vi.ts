const vi = {
    account: {
        menuItems: {
            home: 'Trang chủ',
            settings: 'Cài đặt',
            logout: 'Đăng xuất',
        },
        notifications: {
            logoutSuccessed: 'Đăng xuất thành công!',
            logoutFailed: 'Đăng xuất thất bại!',
        }
    },
    navbar: {
        home: 'Trang chủ',
        settings: 'Cài đặt',
    },
    EmailConfimation: {
        title: 'Xác nhận email',
        desc: 'Hãy cho chúng tôi biết rằng địa chỉ email này thuộc về bạn. Nhập mã từ email được gửi đến <custom>{{email}}</custom>',
        sendCodeAgain: 'Gửi lại mã',
        cancelBtn: 'Hủy',
        confirmBtn: {
            content: 'Xác nhận',
            loadingIndicator: 'Đang xác nhận...',
        },
    },
    login: {
        pageTitle: 'Đăng Nhập',
        title: 'Đăng nhập',
        noAccount: 'Người dùng mới? <custom>{{action}}</custom>',
        createAccount: 'Tạo tài khoản',
        form: {
            username: 'Tên người dùng hoặc địa chỉ email',
            password: 'Mật khẩu',
            showPassword: 'Hiện',
            hidePassword: 'Ẩn',
            loginBtn: {
                content: 'Đăng Nhập',
                loadingIndicator: 'Đang đăng nhập...',
            },
            forgotPassword: 'Quên mật khẩu?'
        },
        validations: {
            username: {
                required: 'Vui lòng nhập tên người dùng',
                min: 'Tên người dùng phải có ít nhất 6 ký tự',
            },
            password: {
                required: 'Vui lòng nhập mật khẩu',
                min: 'Mật khẩu phải có ít nhất 8 ký tự',
            }
        },
        notifications: {
            loginSuccessed: 'Đăng nhập thành công!',
            loginFailed: 'Đăng nhập thất bại!',
            logoutSuccessed: 'Đăng xuất thành công!',
            logoutFailed: 'Đăng xuất thất bại!',
        }
    },
    register: {
        pageTitle: 'Đăng Ký',
        createAccount: {
            title: 'Tạo tài khoản mới',
            haveAccount: 'Đã có tài khoản? <custom>{{action}}</custom>',
            signIn: 'Đăng Nhập',
            form: {
                username: 'Tên người dùng',
                email: 'Địa chỉ email',
                password: 'Mật khẩu',
                confirmPassword: 'Xác nhận mật khẩu',
                registerBtn: {
                    content: 'Tạo tài khoản',
                    loadingIndicator: 'Đang tạo...',
                },
            },
        },
        verifyEmail: {
            title: 'Xác minh email',
            desc: 'Hãy cho chúng tôi biết rằng địa chỉ email này thuộc về bạn. Nhập mã từ email được gửi đến <custom>{{email}}</custom>',
            form: {
                verifyCode: 'Mã xác minh',
                sendCodeAgain: 'Gửi lại mã',
                changeEmail: 'Thay đổi email',
                submitBtn: {
                    content: 'Xác minh',
                    loadingIndicator: 'Đang xác minh...',
                },
            },
        },
        completeCard: {
            cardTitle: 'Hoàn tất!',
            title: 'Tạo tài khoản thành công!',
            content: {
                username: 'Tên người dùng: <custom>{{username}}</custom>',
                email: 'Email: <custom>{{email}}</custom>',
            },
            actions: {
                signIn: 'Đăng Nhập',
            },
        },
        validations: {
            username: {
                required: 'Vui lòng nhập tên người dùng',
                min: 'Tên người dùng phải có ít nhất 6 ký tự',
            },
            email: {
                required: 'Vui lòng nhập địa chỉ email',
                valid: 'Email phải là địa chỉ email hợp lệ',
            },
            password: {
                required: 'Vui lòng nhập mật khẩu',
                min: 'Mật khẩu phải có ít nhất 8 ký tự',
            },
            confirmPassword: {
                required: 'Vui lòng xác nhận mật khẩu',
                match: 'Mật khẩu không khớp',
            },
            verifyCode: {
                required: 'Vui lòng nhập mã xác minh',
                valid: 'Mã xác minh phải có 6 ký tự',
            },
        },
        notifications: {
            registerSuccessed: 'Tạo tài khoản thành công!',
            registerFailed: 'Tạo tài khoản thất bại!'
        }
    },
    resetPassword: {
        pageTitle: 'Đặt Lại Mật Khẩu',
        findAccount: {
            title: 'Tìm tài khoản của bạn',
            desc: 'Vui lòng nhập địa chỉ email của bạn để tìm tài khoản của bạn.',
            form: {
                email: 'Địa chỉ email',
                submitBtn: {
                    content: 'Tìm kiếm',
                    loadingIndicator: 'Đang tìm kiếm...',
                },
                signIn: 'Đăng Nhập',
            },
        },
        verifyEmail: {
            title: 'Xác minh địa chỉ email',
            desc: 'Hãy cho chúng tôi biết rằng địa chỉ email này thuộc về bạn. Nhập mã từ email được gửi đến <custom>{{email}}</custom>',
            form: {
                verifyCode: 'Mã xác minh',
                sendCodeAgain: 'Gửi lại mã',
                changeEmail: 'Thay đổi email',
                submitBtn: {
                    content: 'Xác minh',
                    loadingIndicator: 'Đang xác minh...',
                },
            },
        },
        changePassword: {
            title: 'Thay đổi mật khẩu',
            desc: 'Nhập mật khẩu mới của bạn để thay đổi',
            form: {
                newPassword: 'Mật khẩu mới',
                confirmPassword: 'Xác nhận mật khẩu mới',
                submitBtn: {
                    content: 'Thay đổi',
                    loadingIndicator: 'Đang thay đổi...',
                },
            },
        },
        validations: {
            email: {
                required: 'Vui lòng nhập địa chỉ email',
                valid: 'Email phải là địa chỉ email hợp lệ',
            },
            verifyCode: {
                required: 'Vui lòng nhập mã xác minh',
                valid: 'Mã xác minh phải có 6 ký tự',
            },
            newPassword: {
                required: 'Vui lòng nhập mật khẩu mới',
                min: 'Mật khẩu phải có ít nhất 8 ký tự',
            },
            confirmPassword: {
                required: 'Vui lòng xác nhận mật khẩu mới',
                match: 'Mật khẩu không khớp',
            },
        },
        completeCard: {
            cardTitle: 'Hoàn thành',
            title: 'Đặt lại mật khẩu thành công!',
            actions: {
                signIn: 'Đăng Nhập',
                createNewAccount: 'Tạo tài khoản mới',
            },
        },
    },
    personalSettings: {
        pageTitle: 'Cài Đặt Cá Nhân',
        header: {
            heading: 'Cài Đặt Cá Nhân',
        },
        tabs: {
            general: 'Thông Tin Chung',
            email: 'Email',
            security: 'Bảo Mật',
        },
        general: {
            title: 'Thông tin chung',
            form: {
                username: 'Tên người dùng',
                address: 'Địa chỉ',
                phone: 'Số điện thoại',
                about: 'Giới thiệu',
                resetBtn: 'Đặt lại',
                updateBtn: {
                    content: 'Lưu thay đổi',
                    loadingIndicator: 'Đang lưu...',
                },
                changeAvatarBtn: {
                    content: 'Thay đổi ảnh đại diện',
                    loadingIndicator: 'Đang thay đổi...',
                },
                allowed: 'Cho phép *.jpeg, *.jpg, *.png',
                maxSize: 'kích thước tối đa',
            },
        },
        email: {
            title: 'Email',
            form: {
                oldEmail: 'Email cũ',
                newEmail: 'Email mới',
                updateBtn: {
                    content: 'Lưu thay đổi',
                    loadingIndicator: 'Đang lưu...',
                },
            },
        },
        security: {
            title: 'Bảo Mật',
            form: {
                oldPassword: 'Mật khẩu cũ',
                newPassword: 'Mật khẩu mới',
                confirmPassword: 'Xác nhận mật khẩu mới',
                updateBtn: {
                    content: 'Lưu thay đổi',
                    loadingIndicator: 'Đang lưu...',
                },
            },
        },
        validations: {
            username: {
                required: 'Vui lòng nhập tên người dùng',
                min: 'Tên người dùng phải có ít nhất 6 ký tự',
            },
            oldEmail: {
                required: 'Vui lòng nhập địa chỉ email cũ',
                valid: 'Email phải là địa chỉ email hợp lệ',
            },
            newEmail: {
                required: 'Vui lòng nhập địa chỉ email mới',
                valid: 'Email phải là địa chỉ email hợp lệ',
            },
            confirmCode: {
                required: 'Vui lòng nhập mã xác minh'
            },
            oldPassword: {
                required: 'Vui lòng nhập mật khẩu cũ',
            },
            newPassword: {
                required: 'Vui lòng nhập mật khẩu mới',
                min: 'Mật khẩu phải có ít nhất 8 ký tự',
            },
            confirmPassword: {
                required: 'Vui lòng xác nhận mật khẩu mới',
                match: 'Mật khẩu không khớp',
            }
        },
        notifications: {
            updateInfoSuccessed: 'Cập nhật thông tin thành công!',
            updateInfoFailed: 'Cập nhật thông tin thất bại!',
            changePasswordSuccessed: 'Thay đổi mật khẩu thành công!',
            changePasswordFailed: 'Thay đổi mật khẩu thất bại!',
            changeEmailSuccessed: 'Thay đổi email thành công!',
            changeEmailFailed: 'Thay đổi email thất bại!',
        }
    },
    filters: {
        filterTime: {
            options: {
                today: 'Hôm nay',
                thisWeek: 'Tuần này',
                lastWeek: 'Tuần trước',
                thisMonth: 'Tháng này',
                lastMonth: 'Tháng trước',
                custom: 'Tùy chỉnh',
            },
            custom: {
                title: 'Chọn thời gian',
                from: 'Từ',
                to: 'Đến',
                resetBtn: 'Đặt lại',
                applyBtn: 'Áp dụng',
            },
            label: 'Thời gian',
            labelWithValue: 'Thời gian: <custom>{{value}}</custom>',
            noneValue: 'Không',
        },
        actions: {
            reset: 'Đặt lại',
            apply: 'Áp dụng',
        },
    },
    issues: {
        pageTitle: 'Quản Lý Vấn đề',
        header: {
            heading: 'Quản Lý Vấn đề',
        },
        CreateUpdateIssueDialog: {
            title: {
                add: 'Thêm vấn đề mới',
                update: 'Chỉnh sửa vấn đề',
            },
            form: {
                title: 'Tiêu đề',
                type: 'Loại',
                status: 'Trạng thái',
                priority: 'Độ ưu tiên',
                assignee: 'Người thực hiện',
                assignToMySelf: 'Gán cho tôi',
                startDate: 'Ngày bắt đầu',
                endDate: 'Ngày kết thúc',
                description: 'Mô tả',
                descDescription: 'Vui lòng nhập mô tả trong phần bình luận',
                cancelBtn: 'Hủy',
                updateBtn: {
                    content: 'Cập nhật',
                    loadingIndicator: 'Đang cập nhật...',
                },
                addBtn: {
                    content: 'Thêm',
                    loadingIndicator: 'Đang thêm...',
                }
            },
        },
        addIssueBtn: 'Thêm',
        menu: {
            edit: 'Chỉnh sửa',
            delete: 'Xóa',
        },
        confirmDialog: {
            title: 'Bạn có chắc chắn muốn xóa vấn đề này không?',
            content: 'vấn đề này sẽ bị xóa',
            cancelBtn: 'Hủy',
            deleteBtn: 'Xóa',
        },
        issueTypes: {
            task: 'Nhiệm vụ',
            bug: 'Lỗi',
            request: 'Yêu cầu',
            other: 'Khác',
        },
        issueStatuses: {
            open: 'Đang Mở',
            inprogress: 'Đang tiến hành',
            resolved: 'Đã giải quyết',
            closed: 'Đã đóng',
        },
        issuePriorities: {
            low: 'Thấp',
            medium: 'Trung bình',
            high: 'Cao',
        },
        filters: {
            type: {
                label: 'Loại',
                labelWithValue: 'Loại: <custom>{{value}}</custom>',
                title: 'Chọn loại',
            },
            priority: {
                label: 'Độ ưu tiên',
                labelWithValue: 'Độ ưu tiên: <custom>{{value}}</custom>',
                title: 'Chọn độ ưu tiên',
            },
            assignee: {
                label: 'Người thực hiện',
                labelWithValue: 'Người thực hiện: <custom>{{value}}</custom>',
                title: 'Chọn người dùng',
            },
            noneValue: 'Không',
            resetBtn: 'Đặt lại',
            searchPlaceholder: 'Nhập từ khóa tại đây',
        },
        validations: {
            title: 'Vui lòng nhập tiêu đề',
            type: 'Vui lòng chọn loại',
            status: 'Vui lòng chọn trạng thái',
            priority: 'Vui lòng chọn độ ưu tiên',
            assignee: 'Vui lòng chọn người thực hiện',
            startDate: 'Vui lòng nhập ngày bắt đầu',
            endDate: 'Vui lòng nhập ngày kết thúc',
        },
        notifications: {
            createIssueSuccessed: 'Tạo vấn đề thành công!',
            createIssueFailed: 'Tạo vấn đề thất bại!',
            updateIssueSuccessed: 'Cập nhật vấn đề thành công!',
            updateIssueFailed: 'Cập nhật vấn đề thất bại!',
            deleteIssueSuccessed: 'Xóa vấn đề thành công!',
            deleteIssueFailed: 'Xóa vấn đề thất bại!',
        },
    },
    page404: {
        pageTitle: 'Trang 404 Không Tìm Thấy',
        error: 'Xin lỗi, trang không được tìm thấy!',
        message: 'Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có thể bạn đã gõ sai URL? Hãy chắc chắn kiểm tra chính tả của bạn.',
        goToHome: 'Đi đến Trang Chủ',
    },
}

export default vi;
