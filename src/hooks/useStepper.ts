import { useCallback, useState } from "react";

export default function useStepper(defaultStep = 0) {
    const [activeStep, setActiveStep] = useState<number>(defaultStep)

    const goToNextStep = useCallback(() => {
        setActiveStep(prev => prev + 1)
    }, [defaultStep])

    const goToPrevStep = useCallback(() => {
        setActiveStep(prev => prev - 1)
    }, [defaultStep])

    const goToStep = useCallback((step: number) => {
        setActiveStep(step)
    }, [defaultStep])
    
    return {
        activeStep,
        goToNextStep,
        goToPrevStep,
        goToStep,
    }
}
