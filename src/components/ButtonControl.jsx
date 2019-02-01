import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from './common/Button'

const propTypes = {
  currentStep: PropTypes.number,
  steps: PropTypes.array,
  handlePrevStep: PropTypes.func,
  handleNextStep: PropTypes.func,
  handleCheckout: PropTypes.func,
}

const ButtonControl = (props) => {
  const {
    currentStep,
    steps,
    gotoPrevStep,
  } = props

  const firstStep = currentStep === 0
  const checkoutStep = steps && currentStep === (steps.length - 1)
  const middleStep = !firstStep && !checkoutStep

  const BackButton = () => <Button label="Back" type="button" onClick={gotoPrevStep} />
  const ContinueButton = () => <Button label="Continue" color="primary" />
  const CheckoutButton = () => <Button label="Checkout" color="success" />

  const renderCheckoutButtons = () => (
    <Fragment>
      <BackButton />
      <CheckoutButton />
    </Fragment>
  )

  const renderMiddleStepButtons = () => (
    <Fragment>
      <BackButton />
      <ContinueButton />
    </Fragment>
  )

  const containerClass = firstStep
    ? `d-flex justify-content-end`
    : `d-flex justify-content-between`

  return (
    <div className={containerClass}>
      { firstStep && <ContinueButton />}
      { middleStep && renderMiddleStepButtons() }
      { checkoutStep && renderCheckoutButtons() }
    </div>
  )
}

ButtonControl.propTypes = propTypes

export default ButtonControl
