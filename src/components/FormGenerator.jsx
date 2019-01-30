import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'reactstrap'
import Field from './Field'

const propTypes = {
  formSettings: PropTypes.object,
  currentStep: PropTypes.number,
  handleInput: PropTypes.func,
  values: PropTypes.object,
}

const FormGenerator = (props) => {
  const {
    formSettings, currentStep, handleInput, values,
  } = props

  const { steps } = formSettings

  if (!steps) return null

  const { fieldSets } = formSettings.steps[currentStep]

  return (
    <Form>
      { fieldSets.map((fieldSet, index) => {
        const { title, description, fields } = fieldSet

        return (
          <Fragment key={title}>
            { title && <h1>{title}</h1> }
            { description && <p>{description}</p> }
            { fields.map((field) => {
              const { name } = field
              return (
                <Field
                  key={name}
                  onChange={handleInput}
                  value={values[name]}
                  {...field}
                />
              )
            })}
          </Fragment>
        )
      }) }
    </Form>)
}

FormGenerator.propTypes = propTypes

export default FormGenerator
