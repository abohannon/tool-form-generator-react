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
  console.log(props)
  const {
    currentStep,
    steps,
    handlePrevStep,
    handleNextStep,
    handleCheckout,
  } = props

  const firstStep = currentStep === 0
  const checkoutStep = steps && currentStep === (steps.length - 1)
  const middleStep = !firstStep && !checkoutStep

  const BackButton = () => <Button label="Back" onClick={handlePrevStep} />
  const ContinueButton = () => <Button label="Continue" onClick={handleNextStep} color="primary" />
  const CheckoutButton = () => <Button label="Checkout" onClick={handleCheckout} color="success" />

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
