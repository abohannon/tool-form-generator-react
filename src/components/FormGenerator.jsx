import React, { Fragment } from 'react'

// Components
import Field from './Field'

const FormGenerator = (props) => {
  const {
    formSettings, currentStep, handleInput, values,
  } = props

  const { steps } = formSettings

  if (!steps) return null

  const { fieldSets } = formSettings.steps[currentStep]

  return fieldSets.map((fieldSet, index) => {
    const { title, description, fields } = fieldSet

    return (
      <Fragment key={title}>
        { title && <h1>{title}</h1> }
        { description && <p>{description}</p> }
        { fields.map((field, index) => {
          const { name } = field
          return (
            <Field {...field} onChange={handleInput} value={values[name]} />
          )
        })}
      </Fragment>
    )
  })
}

export default FormGenerator
