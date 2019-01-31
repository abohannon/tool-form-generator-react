import React, { Component } from 'react'
import { FormGroup } from 'reactstrap'
import Field from './Field'

class FieldSet extends Component {
  render() {
    const {
      title,
      name,
      description,
      fields,
      values,
      onChange,
      ...rest
    } = this.props

    return (
      <FormGroup title={name} key={name}>
        { title && <h1>{title}</h1> }
        { description && <p>{description}</p> }
        { fields.map((field) => {
          const { name } = field
          return (
            <Field
              key={name}
              onChange={onChange}
              value={values[name]}
              values={values}
              {...field}
              {...rest}
            />
          )
        })}
      </FormGroup>
    )
  }
}

export default FieldSet