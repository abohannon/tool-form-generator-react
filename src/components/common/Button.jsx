import React from 'react';
import PropTypes from 'prop-types';
import { Button as RSButton } from 'reactstrap'

const propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

const Button = (props) => {
  const {
    label, type = `submit`, color, className, buttonStyle, ...rest
  } = props;

  return (
    <RSButton
      type={type}
      {...rest}
      color={color || `none`}
      style={buttonStyle}
    >
      {label}
    </RSButton>
  );
};

Button.propTypes = propTypes;

export { Button }
