import React, { Fragment } from 'react'

// Components
import Field from './Field'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Datalist from './Datalist'

const FORM_COMPONENTS = {
  string: Input,
  number: Input,
  radio: Radio,
  select: Select,
  datalist: Datalist,
}

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
      <Fragment>
        { title && <h1>{title}</h1> }
        { description && <p>{description}</p> }
        { fields.map((field, index) => <p>{ field.title }</p>)}
      </Fragment>
    )
  })
}

export default FormGenerator
