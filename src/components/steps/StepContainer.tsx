import React, { useMemo } from "react";
import { step } from "./types";
import useStepValues from "./useStepValues";
import { RootStyle } from "./styles";

type StepContainerProps = {
    steps: step[],
}

const StepContainer: React.FC<StepContainerProps> = ({ steps }) => {
    const { activeStep } = useStepValues()

    const content = useMemo(() => {
        if (activeStep !== undefined) return steps[activeStep]?.content
    }, [activeStep, steps])

    return (
        <RootStyle>
            {content}
        </RootStyle>
    )
}

export default StepContainer;
