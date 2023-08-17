import React, { ReactNode } from "react";
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'
import { RestProps } from "../../utils/types";

type Props = {
    id?: string,
    children: ReactNode,
    onSubmit: () => void,
    methods: UseFormReturn<any>,
}

type FormProviderProps = Props & RestProps

const FormProvider: React.FC<FormProviderProps> = ({ id, methods, children, onSubmit, ...props }) => {
    return (
        <Form  {...methods}>
            <form id={id}
                noValidate
                onSubmit={onSubmit}
                style={{ height: '100%' }}
                {...props}>
                {children}
            </form>
        </Form>
    )
}

export default FormProvider;
