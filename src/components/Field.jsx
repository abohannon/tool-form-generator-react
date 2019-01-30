import React from 'react';
import PropTypes from 'prop-types';

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
  } = props

  const SpecificField = FORM_COMPONENTS[type] || null

  const specificFieldProps = {
    type,
    name,
    rules,
    onChange,
    value: value || ``,
  }

  if (rules.length) {
    rules.forEach(rule => (
      specificFieldProps[rule] = true
    ))
  }

  return (
    <div className="form-group">
      { label && <label htmlFor={name}>{label}</label> }
      <SpecificField {...specificFieldProps} />
      { smallText && <small className="form-text text-muted">{smallText}</small> }
    </div>
  )
}

Field.defaultProps = defaultProps

export default Field;
