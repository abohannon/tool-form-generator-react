import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './common/Button'

const defaultProps = {
  label: `Back`,

}

const BackButton = ({ currentStep, ...rest }) => {
  if (currentStep < 1) return null

  return (
    <Button {...rest} />
  )
}

BackButton.defaultProps = defaultProps

export default BackButton
