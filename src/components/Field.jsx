import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap'

const defaultProps = {
  rules: [],
}

const Field = (props) => {
  const {
    type,
    smallText,
    label,
    rules,
    onChange,
    value,
    name,
    options,
  } = props

  const specificFieldProps = {
    type,
    name,
    rules,
    onChange,
    value: value || ``,
    options: options || [],
  }

  if (rules.length) {
    rules.forEach(rule => (
      specificFieldProps[rule] = true
    ))
  }

  return (
    <FormGroup>
      { label && <Label for={name}>{label}</Label> }
      <Input {...specificFieldProps} />
      { smallText && <small className="form-text text-muted">{smallText}</small> }
    </FormGroup>
  )
}

Field.defaultProps = defaultProps

export default Field;
