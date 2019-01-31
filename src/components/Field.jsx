import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap'
import { Input } from './common'

const defaultProps = {
  rules: [],
}

class Field extends Component {
  static defaultProps = {
    rules: [],
  }

  state = {
    invalid: false,
  }

  componentDidMount() {
    const { type, name, options } = this.props

    if (type === 'select') {
      this.setInitialStateForSelectInput(name, options[0])
    }
  }

  setInitialStateForSelectInput = (name, value) => {
    const { onChange } = this.props

    onChange({
      target: {
        name,
        value
      }
    })
  }

  render() {
    const { invalid } = this.state

    const {
      type,
      smallText,
      label,
      rules,
      onChange,
      value,
      values,
      name,
      options,
      validation,
      placeholder,
      target,
      toggleCollapse,
    } = this.props

    const specificFieldProps = {
      type,
      name,
      onChange,
      value: value || ``,
      onInvalid: this.setInvalid,
      invalid,
      onInput: this.setValid,
      placeholder: placeholder || '',
    }

    if (rules.length) {
      rules.forEach(rule => (
        specificFieldProps[rule] = true
      ))
    }

    if (rules.length) {
      specificFieldProps.rules = rules
    }

    if (type === 'select') {
      specificFieldProps.options = options
    }

    if (type === 'checkbox') {
      delete specificFieldProps.value

      specificFieldProps.onChange = (event) => {
        onChange(event)
        toggleCollapse(target)
      }

    }
    
    const check = type === 'checkbox'

    return (
      <FormGroup check={check}>
        { label && <Label for={name} check={check}>{!check && label}</Label> }
        <Input {...specificFieldProps} /> { check && label }
        { smallText && <small className="form-text text-muted">{smallText}</small> }
        { (invalid && validation) && <FormFeedback>{validation.message}</FormFeedback>}
      </FormGroup>
    )
  }
}

export default Field;
