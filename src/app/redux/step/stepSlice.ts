import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {

}

export const stepSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        registerUi(state, action) {
            const { uiId } = action.payload
            if (state[uiId]) return // if exist
            state[uiId] = {
                id: uiId,
                activeStep: 0,
                steps: {},
            }
        },
        goToNextStep(state, action) {
            const { uiId, stepValues } = action.payload
            state[uiId] = {
                ...state[uiId],
                steps: {
                    ...state[uiId].steps,
                    [state[uiId].activeStep]: stepValues,
                },
                activeStep: state[uiId].activeStep + 1,
            }
        },
        goToPrevStep(state, action) {
            const { uiId } = action.payload
            state[uiId] = {
                ...state[uiId],
                activeStep: state[uiId].activeStep - 1,
            }
        },
        goToStep(state, action) {
            const { uiId, step } = action.payload
            state[uiId] = {
                ...state[uiId],
                activeStep: step
            }
        },
    }
})

const selectActiveStep = (state: any, uiId: string) => state.steps[uiId]?.activeStep
const selectSteps = (state: any, uiId: string) => state.steps[uiId]?.steps

export { selectActiveStep, selectSteps }

export const {
    registerUi,
    goToNextStep,
    goToPrevStep,
    goToStep,
} = stepSlice.actions

export default stepSlice.reducer;
