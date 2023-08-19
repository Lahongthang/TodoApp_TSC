import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import RHFUploadAvatar from "../../../../components/hook-form/RHFUploadAvatar";
import { fData } from "../../../../utils/formatNumber";
import { LoadingButton } from "@mui/lab";

type AvatarCardProps = {
    t: any,
    isHandling: boolean,
    onSubmit: () => void,
    onDrop: (acceptedFiles: any) => void,
}

const AvatarCard: React.FC<AvatarCardProps> = ({ t, isHandling, onDrop, onSubmit }) => {
    return (
        <Card>
            <Stack spacing={2}>
                <RHFUploadAvatar
                    name="avatar"
                    maxSize={3145728}
                    onDrop={onDrop}
                    helperText={
                        <Typography
                            variant="caption"
                            sx={{
                                mt: 2,
                                mx: 'auto',
                                display: 'block',
                                textAlign: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            {t('general.form.allowed')}
                            <br/>
                            {t('general.form.maxSize')} {fData(3145728)}
                        </Typography>
                    }
                />
                <LoadingButton
                    size='small'
                    variant="contained"
                    loading={isHandling}
                    onClick={onSubmit}
                    loadingIndicator={t('general.form.changeAvatarBtn.loadingIndicator')}>
                    {t('general.form.changeAvatarBtn.content')}
                </LoadingButton>
            </Stack>
        </Card>
    )
}

export default AvatarCard;
