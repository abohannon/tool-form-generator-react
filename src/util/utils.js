import { values } from 'lodash'

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

/* This method mutates the formSettings object by adding arrays to the fieldSets and fields properties so the data structure is easier to iterate through for our Form Generator. */
export const formatFormSettings = (formSettings) => {
  const { steps } = formSettings

  formatFieldSets(steps)

  steps.forEach((step) => {
    const { fieldSets } = step
    formatFields(fieldSets)
  })
}
