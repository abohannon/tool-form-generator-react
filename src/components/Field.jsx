import React from 'react';

const Field = (props) => {
  const {
    name,
    smallText,
    label,
    component,
    ...rest
  } = props


  return (
    <div className="form-group">
      { label && <label htmlFor={name}>{label}</label> }
      <props.component name={name} label={label} {...rest} />
      { smallText && <small className="form-text text-muted">{smallText}</small> }
    </div>
  )
}

export default Field;
