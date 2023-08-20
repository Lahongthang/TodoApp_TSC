import React from "react";
import { Card, Stack, alpha } from '@mui/material'
import RegisterForm from "./RegisterForm";

type RegisterCardProps = {
    t: any,
    isHandling: boolean,
}

const RegisterCard: React.FC<RegisterCardProps> = ({ t, isHandling }) => {
    return (
        <Card sx={{
            px: 7,
            height: 1,
            display: 'flex',
            borderRadius: 0,
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.03)
        }}>
            <Stack sx={{ width: 1 }} justifyContent='center'>
                <RegisterForm t={t} isHandling={isHandling} />
            </Stack>
        </Card>
    )
}

export default RegisterCard;