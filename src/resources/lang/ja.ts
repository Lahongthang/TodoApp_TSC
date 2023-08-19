const ja = {
    account: {
        menuItems: {
            home: 'ホーム',
            settings: '設定',
            logout: 'ログアウト',
        },
        notifications: {
            logoutSuccessed: 'ログアウトに成功しました。',
            logoutFailed: 'ログアウトに失敗しました!',
        }
    },
    EmailConfimation: {
        title: 'メール確認',
        desc: 'あなたのものであることを知らせてください。<custom>{{email}}</custom>に送信されたメールからコードを入力してください。',
        sendCodeAgain: 'コードを再度送ります',
        cancelBtn: 'キャンセル',
        confirmBtn: {
            content: '確認',
            loadingIndicator: '確認中...',
        },
    },
    login: {
        pageTitle: 'サインイン',
        title: 'サインイン',
        noAccount: '新しいユーザー？ <custom>{{action}}</custom>',
        createAccount: 'アカウントを作成する',
        form: {
            username: 'ユーザー名またはメールアドレス',
            password: 'パスワード',
            showPassword: '見せる',
            hidePassword: '隠れる',
            loginBtn: {
                content: 'ログイン',
                loadingIndicator: 'ログインする...',
            },
            forgotPassword: 'パスワードをお忘れですか？'
        },
        validations: {
            username: {
                required: 'ユーザー名を入力してください',
                min: 'ユーザー名は6文字以上である必要があります',
            },
            password: {
                required: 'パスワードを入力してください',
                min: 'パスワードは8文字以上でなければなりません',
            }
        },
        notifications: {
            loginSuccessed: 'ログインに成功しました！',
            loginFailed: 'ログインに失敗しました！',
            logoutSuccessed: 'ログアウトに成功しました。',
            logoutFailed: 'ログアウトに失敗しました!',
        }
    },
    register: {
        pageTitle: '登録',
        title: '新しいアカウントを作成する',
        haveAccount: 'すでにアカウントをお持ちですか？ <custom>{{action}}</custom>',
        signIn: 'サインイン',
        form: {
            username: 'ユーザー名',
            email: 'メールアドレス',
            password: 'パスワード',
            confirmPassword: 'パスワードの確認',
            showPassword: '見せる',
            hidePassword: '隠れる',
            registerBtn: {
                content : 'アカウントを作成する',
                loadingIndicator: '作成中...',
            },
        },
        completeCard: {
            cardTitle: '完成しました！',
            title: 'アカウントが正常に作成されました!',
            content: {
                username: 'ユーザー名: <custom>{{username}}</custom>',
                email: 'メール: <custom>{{email}}</custom>',
            },
            actions: {
                signIn: 'サインイン',
            },
        },
        validations: {
            username: {
                required: 'ユーザー名を入力してください',
                min: 'ユーザー名は6文字以上である必要があります',
            },
            email: {
                required: 'メールアドレスを入力してください',
                valid: '電子メールは有効な電子メール アドレスである必要があります',
            },
            password: {
                required: 'パスワードを入力してください',
                min: 'パスワードは8文字以上でなければなりません',
            },
            confirmPassword: {
                required: '確認パスワードを入力してください',
                match: 'パスワードが一致しません',
            },
            confirmCode: {
                required: '確認コードを入力してください',
            },
        },
        notifications: {
            registerSuccessed: 'アカウントが正常に作成されました!',
            registerFailed: 'アカウントの作成に失敗しました!'
        }
    },
    personalSettings: {
        pageTitle: '個人設定',
        header: {
            heading: '個人設定',
        },
        tabs: {
            general: '一般情報',
            email: 'メール',
            security: 'セキュリティ',
        },
        general: {
            title: '一般情報',
            form: {
                username: 'ユーザー名',
                address: '住所',
                phone: '電話番号',
                about: '記述',
                resetBtn: 'リセット',
                updateBtn: {
                    content: '変更の保存',
                    loadingIndicator: '保存中...',
                },
                changeAvatarBtn: {
                    content: 'アバターの変更',
                    loadingIndicator: '変更中...',
                },
                allowed: '*.jpeg、*.jpg、*.png を許可します',
                maxSize: '最大サイズ',
            },
        },
        email: {
            title: 'メール',
            form: {
                oldEmail: '古いメール',
                newEmail: '新しいメール',
                updateBtn: {
                    content: '変更の保存',
                    loadingIndicator: '保存中...',
                },
            },
        },
        security: {
            title: 'セキュリティ',
            form: {
                oldPassword: '以前のパスワード',
                newPassword: '新しいパスワード',
                confirmPassword: '新しいパスワードの確認',
                updateBtn: {
                    content: '変更の保存',
                    loadingIndicator: '保存中...',
                },
            },
        },
        validations: {
            username: {
                required: 'ユーザー名を入力してください',
                min: 'ユーザー名は6文字以上である必要があります',
            },
            oldEmail: {
                required: '古いメールアドレスを入力してください',
                valid: '電子メールは有効な電子メール アドレスである必要があります',
            },
            newEmail: {
                required: '新しいメールアドレスを入力してください',
                valid: '電子メールは有効な電子メール アドレスである必要があります',
            },
            confirmCode: {
                required: '確認コードを入力してください'
            },
            oldPassword: {
                required: '古いパスワードを入力してください',
            },
            newPassword: {
                required: '新しいパスワードを入力してください',
                min: 'パスワードは8文字以上でなければなりません',
            },
            confirmPassword: {
                required: '確認パスワードを入力してください',
                match: 'パスワードが一致しません',
            }
        },
        notifications: {
            updateInfoSuccessed: '情報が正常に更新されました!',
            updateInfoFailed : '情報の更新に失敗しました!',
            changePasswordSuccessed: 'パスワードが正常に変更されました!',
            changePasswordFailed: 'パスワードの変更に失敗しました!',
            changeEmailSuccessed: 'メールアドレスを変更しました!',
            changeEmailFailed: 'メールアドレスの変更に失敗しました!',
        }
    },
    filters: {
        filterTime: {
            options: {
                today: '今日',
                thisWeek: '今週',
                lastWeek: '先週',
                thisMonth: '今月',
                lastMonth: '先月',
                custom: 'カスタム',
            },
            label: '時間: <custom>{{value}}</custom>',
            noneValue: '無し',
        },
        actions: {
            reset: 'リセット',
            apply: '適用する',
        },
    },
    issues: {
        pageTitle: '問題管理',
        header: {
            heading: '問題管理',
        },
        CreateUpdateIssueDialog: {
            title: {
                add: '問題追加',
                update: '問題編集',
            },
            form: {
                title: 'タイトル',
                type: 'タイプ',
                status: '状態',
                priority: '優先度',
                assignToMySelf: '自分に割り当てる',
                assignee: '譲受人',
                startDate: '開始日',
                endDate: '終了日',
                description: '記述',
                descDescription: 'コメントに記述を入力してください',
                cancelBtn: 'キャンセル',
                updateBtn: {
                    content: '更新',
                    loadingIndicator: '更新中...',
                },
                addBtn: {
                    content: '追加',
                    loadingIndicator: '追加中...',
                }
            },
        },
        addIssueBtn: '追加',
        menu: {
            edit: '編集',
            delete: '削除',
        },
        confirmDialog: {
            title: 'この問題を削除してもよろしいですか?',
            content: 'この問題は削除されます',
            cancelBtn: 'キャンセル',
            deleteBtn: '削除',
        },
        issueTypes: {
            task: 'タスク',
            bug: 'バグ',
            request: 'リクエスト',
            other: '他の',
        },
        issueStatuses: {
            open: '開いている',
            inprogress: '進行中',
            resolved: '解決済み',
            closed: '閉じられた',
        },
        issuePriorities: {
            low: '低い',
            medium: '中程度',
            high: '高い',
        },
        filters: {
            type: {
                label: 'タイプ: <custom>{{value}}</custom>',
                title: 'タイプの選択',
            },
            priority: {
                label: '優先度: <custom>{{value}}</custom>',
                title: '優先度の選択',
            },
            assignee: {
                label: '譲受人: <custom>{{value}}</custom>',
                title: '譲受人の選択',
            },
            noneValue: '無し',
            resetBtn: 'リセット',
            searchPlaceholder: 'キーワードを入力してください',
        },
        notifications: {
            createIssueSuccessed: '問題の作成に成功しました!',
            createIssueFailed: '問題の作成に失敗しました!',
            updateIssueSuccessed: '問題を正常に更新しました!',
            updateIssueFailed: 'アップデートの問題が失敗しました!',
            deleteIssueSuccessed: '問題を正常に削除しました!',
            deleteIssueFailed: '問題の削除に失敗しました!',
        },
    },
}

export default ja;
