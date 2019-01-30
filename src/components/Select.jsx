import React from 'react'
import PropTypes from 'prop-types'
import { Input as RSInput } from 'reactstrap'

const propTypes = {
  options: PropTypes.array,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

const Select = (props) => {
  const {
    options, type, name, onChange,
  } = props

  return (
    <RSInput type={type} name={name} onChange={onChange}>
      {
        options.map(option => <option>{option}</option>)
      }
    </RSInput>
  )
}

Select.propTypes = propTypes

export default Select
