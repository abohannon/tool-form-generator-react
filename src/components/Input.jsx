import React from 'react'
import { Input as RSInput } from 'reactstrap'

const Input = (props) => {
  const { ariaDescribedBy } = props
  return (
    <RSInput
      className="form-control"
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

export default Input
