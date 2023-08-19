import React from "react";
import { Card, CardHeader, Stack } from "@mui/material";
import { RHFTextField } from "../../../../components/hook-form";
import { LoadingButton } from "@mui/lab";

type EditEmailCardProps = {
    isHandling: boolean,
    onSubmit: () => void,
}

const EditEmailCard: React.FC<EditEmailCardProps> = ({ isHandling , onSubmit }) => {
    return (
        <Card>
            <CardHeader title={'Email'} />
            <Stack spacing={2}>
                <RHFTextField
                    name='oldEmail'
                    label='Old email'
                    InputProps={{
                        readOnly: true
                    }}
                />
                <RHFTextField name='newEmail' label='New email' />
                <Stack direction='row' justifyContent='flex-end'>
                    <LoadingButton
                        size="small"
                        type='submit'
                        variant="contained"
                        loading={isHandling}
                        loadingIndicator={'Saving...'}
                        onClick={onSubmit}
                    >
                        Save Changes
                    </LoadingButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default EditEmailCard;
