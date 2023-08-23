import React from "react";
import StepContextProvider from "../../../components/steps/StepContextProvider";
import StepContainer from "../../../components/steps/StepContainer";
import FindAccountStep from "./find-account/FindAccountStep";
import VerifyEmailStep from "./verify-email/VerifyEmailStep";
import ChangePasswordStep from "./change-password/ChangePasswordStep";

const UI_ID = 'reset-password'

const STEP_OPTIONS = [
    { value: 'findAccount', content: <FindAccountStep /> },
    { value: 'verifyEmail', content: <VerifyEmailStep /> },
    { value: 'resetPassword', content: <ChangePasswordStep /> },
]

const ResetPasswordContainer: React.FC = () => {
    return (
        <StepContextProvider uiId={UI_ID}>
            <StepContainer steps={STEP_OPTIONS} />
        </StepContextProvider>
    )
}

export default ResetPasswordContainer;
