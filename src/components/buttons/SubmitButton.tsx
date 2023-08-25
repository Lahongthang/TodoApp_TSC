import React from "react";
import { LoadingButton } from "@mui/lab";
import { RestProps } from "../../utils/types";

type Props = {
    forForm?: string,
    size?: 'small' | 'medium' | 'large',
    variant?: 'text' | 'outlined' | 'contained',
    fullWidth?: boolean,
    text: string,
    isLoading?: boolean,
    loadingText?: string,
}

type SubmitButtonProps = Props & RestProps

const SubmitButton: React.FC<SubmitButtonProps> = ({
    forForm,
    text,
    loadingText,
    variant='contained',
    fullWidth = false,
    size = 'small',
    isLoading = false,
    ...props
}) => {
    return (
        <LoadingButton
            size={size}
            type="submit"
            form={forForm}
            variant={variant}
            fullWidth={fullWidth}
            loading={isLoading}
            loadingIndicator={loadingText}
            {...props}
        >
            {text}
        </LoadingButton>
    )
}

export default SubmitButton;
