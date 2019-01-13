import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

const Button = (props) => {
  const {
    children, type = `submit`, color, className, ...rest
  } = props;

  let buttonClass
  let buttonStyle = {}

  switch (color) {
    case `blue`:
      buttonClass = `primary`
      break
    case `green`:
      buttonClass = `success`
      break
    case `grey`:
      buttonClass = `secondary`
      break
    case `red`:
      buttonClass = `danger`
      break
    case `yellow`:
      buttonClass = `warning`
      break
    case `white`:
      buttonClass = `light`
      break
    case `dark-grey`:
      buttonClass = `dark`
      break
    case `teal`:
      buttonClass = `info`
      break
    default:
      buttonStyle = { backgroundColor: color, borderColor: color }
      break
  }


  return (
    <button
      type={type}
      {...rest}
      className={className || (buttonClass && `btn btn-${buttonClass}`) || `btn btn-primary`}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
