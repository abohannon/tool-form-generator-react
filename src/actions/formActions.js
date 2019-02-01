import defaultFormSettings from '../config/formSettings'
import { merge } from 'lodash'
import { formatFormSettings } from '../util/utils'

import {
  NEXT_STEP,
  PREV_STEP,
  FORMAT_SETTINGS,
} from './types'

export const nextStep = () => ({ type: NEXT_STEP })
export const prevStep = () => ({ type: PREV_STEP })
 
export const formatSettings = () => {

  let formSettings = defaultFormSettings
  
  if (window && window.userFormSettings) {
    const { userFormSettings } = window
    formSettings = merge(defaultFormSettings, userFormSettings)
  }

  // format the form settings object for the FormGenerator
  const newFormSettings = formatFormSettings(formSettings)

  return {
    type: FORMAT_SETTINGS,
    payload: newFormSettings,
  }
}