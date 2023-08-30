import { useCallback, useState } from "react";

export default function useStepper(defaultStep = 0) {
    const [activeStep, setActiveStep] = useState<number>(defaultStep)

    const goToNextStep = useCallback(() => {
        setActiveStep(prev => prev + 1)
    }, [])

    const goToPrevStep = useCallback(() => {
        setActiveStep(prev => prev - 1)
    }, [])

    const goToStep = useCallback((step: number) => {
        setActiveStep(step)
    }, [])
    
    return {
        activeStep,
        goToNextStep,
        goToPrevStep,
        goToStep,
    }
}
