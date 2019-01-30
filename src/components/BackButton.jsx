import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './common/Button'

const defaultProps = {
  label: `Back`,

}

const BackButton = ({ currentStep, ...rest }) => (
  <Button {...rest} />
)

BackButton.defaultProps = defaultProps

export default BackButton
