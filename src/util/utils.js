import { values, cloneDeep } from 'lodash'

const formatFieldSets = (steps) => {
  steps.forEach((step) => {
    const newFieldSets = values(step.fieldSets)
    step.fieldSets = newFieldSets
  })
}

const formatFields = (fieldSets) => {
  fieldSets.forEach((fieldSet) => {
    const newFields = values(fieldSet.fields)
    fieldSet.fields = newFields
  })
}

/* This method created a new formSettings object by adding arrays to the fieldSets and fields properties so the data structure is easier to iterate through for our Form Generator. */
export const formatFormSettings = (formSettings) => {
  // clone formSettings so we don't mutate the original object
  const newFormSettings = cloneDeep(formSettings)

  const { steps } = newFormSettings

  formatFieldSets(steps)

  steps.forEach((step) => {
    const { fieldSets } = step
    formatFields(fieldSets)
  })

  return newFormSettings
}
