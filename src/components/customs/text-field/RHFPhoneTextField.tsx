import React from "react";
import { RHFTextField } from "../../hook-form";
import { RestProps } from "../../../utils/types";
import PhoneMask from "../../input-format/PhoneMask";

type Props = {
    name: string,
}

type RHFPhoneTextFieldProps = Props & RestProps

const RHFPhoneTextField: React.FC<RHFPhoneTextFieldProps> = ({ name, ...props }) => {
    return (
        <RHFTextField
            name={name}
            InputProps={{
                inputComponent: PhoneMask,
            }}
            {...props}
        />
    )
}

export default RHFPhoneTextField;
