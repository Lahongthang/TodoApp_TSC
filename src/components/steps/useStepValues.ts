import { useCallback, useContext } from "react";
import { StepContext } from "./StepContextProvider";
import { dispatch, useSelector } from "../../app/store";
import {
    selectActiveStep,
    goToStep as go2Step,
    goToNextStep as go2NextStep,
    goToPrevStep as go2PrevStep,
    selectSteps,
} from "../../app/redux/step/stepSlice";

export default function useStepValues() {
    const { uiId } = useContext(StepContext) as { uiId: string }

    const activeStep = useSelector((state) => selectActiveStep(state, uiId))
    const data = useSelector((state) => selectSteps(state, uiId))

    const getStepValues = useCallback((step: number) => {
        return data[step]
    }, [data])

    const goToNextStep = useCallback((stepValues: any = null) => {
        dispatch(go2NextStep({ uiId, stepValues }))
    }, [dispatch, uiId])

    const goToPrevStep = useCallback(() => {
        dispatch(go2PrevStep({ uiId }))
    }, [dispatch, uiId])

    const goToStep = useCallback((step: number) => {
        dispatch(go2Step({ uiId, step }))
    }, [dispatch, uiId])

    return {
        activeStep,
        getStepValues,
        goToNextStep,
        goToPrevStep,
        goToStep,
    }
}
