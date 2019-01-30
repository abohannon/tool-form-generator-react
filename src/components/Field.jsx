import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'reactstrap'

// Components
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Datalist from './Datalist'

const FORM_COMPONENTS = {
  text: Input,
  number: Input,
  tel: Input,
  radio: Radio,
  select: Select,
  datalist: Datalist,
}

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

  const SpecificField = FORM_COMPONENTS[type] || null

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
      { label && <label htmlFor={name}>{label}</label> }
      <SpecificField {...specificFieldProps} />
      { smallText && <small className="form-text text-muted">{smallText}</small> }
    </FormGroup>
  )
}

Field.defaultProps = defaultProps

export default Field;
