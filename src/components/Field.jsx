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
    const { onChange, type, name, values, options } = this.props

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

  setInvalid = (e) => {
    e.preventDefault()
    this.setState({ invalid: true })
  }

  setValid = () => {
    this.setState({ invalid: false })
  }

  // validateInput = () => {
  //   const { validation, value} = this.props

  //   if (validation) {
  //     const isValid = validation.regex.test(value)
  //     console.log(isValid)
  //   }
  // }

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

    if (type === 'select') {
      specificFieldProps.options = options
    }

    if (rules.length) {
      specificFieldProps.rules = rules
    }


    return (
      <FormGroup>
        { label && <Label for={name}>{label}</Label> }
        <Input {...specificFieldProps} />
        { smallText && <small className="form-text text-muted">{smallText}</small> }
        { (invalid && validation) && <FormFeedback>{validation.message}</FormFeedback>}
      </FormGroup>
    )
  }
}

export default Field;
