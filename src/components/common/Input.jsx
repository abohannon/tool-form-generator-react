import React from 'react'
import { Input as RSInput } from 'reactstrap'

const Input = (props) => {
  const { options, value, name, ...rest } = props

  if (options) {
    return (
      <RSInput
        {...rest}
        name={name}
      >
      { options.map(option => (
        <option key={option} value={option}>
        {option}
        </option>
      )) }
      </RSInput> 
    )
  }


  return (
    <RSInput name={name} value={value} {...rest} />
  )
}

export { Input }