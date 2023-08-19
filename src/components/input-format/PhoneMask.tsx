import React, { forwardRef } from "react";
import { IMaskInput } from 'react-imask'

const PhoneMask = forwardRef(((props: any, ref: any) => {
    return (
        <IMaskInput
            {...props}
            inputRef={ref}
            mask={[
                { mask: '000-000-0000', overwrite: true },
            ]}
            onAccept={(value) => {
                const number = value?.match(/\d/g)?.join("");
                props?.onChange({ target: { name: props.name, value: number ?? '' } })
            }}
        />
    )
}))

export default PhoneMask;
