import React from 'react'
import map from 'lodash'

// Components
import Field from './Field'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Datalist from './Datalist'

const FORM_COMPONENTS = {
  input: Input,
  radio: Radio,
  select: Select,
  datalist: Datalist,
}

const FormGenerator = (props) => {
  const {
    formSettings, currentStep, handleInput, values,
  } = props

  const { steps } = formSettings
  // console.log(steps)

  return null
  // return (
  //   map(steps[currentStep].fieldSets, (fieldSet) => (
  //     <div key={section.name}>
  //       <h3>{section.title}</h3>
  //       { section.fields.map(field => (
  //         <Field
  //           {...field}
  //           onChange={handleInput}
  //           value={values[field.name] || ``}
  //           key={field.name}
  //           component={FORM_COMPONENTS[field.component]}
  //         />
  //       ))}
  //   ) )
  //   steps[currentStep].sections.map(section => (
  //     <div key={section.name}>
  //       <h3>{section.title}</h3>
  //       { section.fields.map(field => (
  //         <Field
  //           {...field}
  //           onChange={handleInput}
  //           value={values[field.name] || ``}
  //           key={field.name}
  //           component={FORM_COMPONENTS[field.component]}
  //         />
  //       ))}
  //     </div>
  //   ))
  // )
}

export default FormGenerator
