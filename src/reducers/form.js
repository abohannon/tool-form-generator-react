import {
  NEXT_STEP,
  PREV_STEP,
  FORMAT_SETTINGS,
} from '../actions/types'

const INITIAL_STATE = {
  currentStep: 0,
  formSettings: {},
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case NEXT_STEP: {
      const newState = {
        currentStep: state.currentStep + 1
      }

      return { ...state, ...newState }
    }

    case PREV_STEP: {
      const newState = {
        currentStep: state.currentStep - 1
      }

      return { ...state, ...newState }
    }

    case FORMAT_SETTINGS: {
      const newState = {
        formSettings: payload
      }

      return { ...state, ...newState }
    }
    default:
      return state
  }
}