import React from "react";
import { Stack, InputAdornment, IconButton, Link, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "../../../hooks";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { LoginSchema } from "../../../utils/validations/auth/LoginSchema";
import { LoadingButton } from "@mui/lab";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

const FORM_ID = 'login-form'

const LoginForm: React.FC = () => {
    const { toggle: show, onToggle } = useToggle()

    return (
        <Stack spacing={3}>
            <Typography>{'New user? Create an account'}</Typography>
            <RHFTextField size='medium' name="username" label='User name' />
            <RHFTextField
                size='medium'
                name="password"
                label='Password'
                type={show ? 'text' : 'password'}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton onClick={onToggle}>
                            {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                }}
            />
            <Link href="" variant="body2" alignSelf='flex-end'>
                Forgot password?
            </Link>
            <LoadingButton type="submit" variant="contained">
                Login
            </LoadingButton>
        </Stack>
    )
}

const LoginFormContainer: React.FC = () => {
    const defaultValues = {
        username: '',
        password: '',
    }
    const methods = useForm({
        resolver: yupResolver(LoginSchema()),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit } = methods

    const handleLogin = async (data: any) => {
        console.log({data})
        try {
            await dispatch(authApi.endpoints.login.initiate(data)).unwrap()
        } catch (error) {
            console.error(error)
        }
    }

    return <FormProvider id={FORM_ID}
        methods={methods}
        onSubmit={handleSubmit(handleLogin)}
    >
        <LoginForm />
    </FormProvider>
}

export default LoginFormContainer;
