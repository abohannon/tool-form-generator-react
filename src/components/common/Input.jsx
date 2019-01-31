import React from 'react'
import { Input as RSInput } from 'reactstrap'

const Input = (props) => {
  const { options, value, ...rest } = props

  if (options) {
    return (
      <RSInput
        {...rest}
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
    <RSInput value={value} {...rest} />
  )
}

export { Input }