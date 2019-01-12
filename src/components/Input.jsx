import React from 'react'

const Input = (props) => {
  const { name, ariaDescribedBy } = props
  return (
    <input
      className="form-control"
      aria-describedby={ariaDescribedBy}
      {...props}
    />
  )
}

export default Input
