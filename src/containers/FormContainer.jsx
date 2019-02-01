import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, FormGroup } from 'reactstrap'
import ButtonControl from '../components/ButtonControl'
import FieldSet from '../components/FieldSet'
import WithTransition from '../components/WithTransition'
import { nextStep, prevStep, formatSettings } from '../actions/formActions'

// Utilities
import externalEventListener from '../util/externalEventListener'

class FormContainer extends Component {
    state = {}

    componentDidMount() {
      const { dispatch } = this.props
      // attach event listeners to external fields we need
      externalEventListener()
      dispatch(formatSettings())
    }

    // handles state changes for any external inputs outside the React component
    handleExternalInput = (name, value) => {
      this.setState({ [name]: value })
    }

    handleInput = (event) => {
      const { target } = event
      const { name, value, checked } = target
  
      this.setState({ [name]: value || checked })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const { currentStep, formSettings: { steps } } = this.props

      const notFinalStep = currentStep < steps.length - 1

      if (notFinalStep) {
        this.gotoNextStep()
      } else {
        console.log('SUBMIT', this.state)
      }
    }

    handleTransition = (target, callback) => {
      callback(target)
    }

    gotoPrevStep = () => {
      const { dispatch } = this.props

      dispatch(prevStep())
    }

    gotoNextStep = () => {
      const { dispatch } = this.props

      dispatch(nextStep())
    }

    render() {
      const { ...values } = this.state

      const { dispatch, currentStep, formSettings: { steps } } = this.props

      if (!steps) return null

      const { fieldSets } = steps[currentStep]

      return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        { fieldSets.map((fieldSet, index) => {
          const { transition, name } = fieldSet

          return (
            <WithTransition
              key={name}
              id={name}
              transition={transition}
              handleTransition={this.handleTransition}
              render={(transitionProps) => (
                <FieldSet
                  values={values}
                  onChange={this.handleInput}
                  { ...fieldSet }
                  { ...transitionProps }
                />
              )} 
            />
          )
        }) }
        <ButtonControl
          dispatch={dispatch}
          currentStep={currentStep}
          steps={steps}
          gotoPrevStep={this.gotoPrevStep}
          handleCheckout={this.handleCheckout}
        />
        </Form>
      </div>
      );
    }
}

const mapStateToProps = ({
  form: {
    currentStep,
    formSettings,
  }
}) => ({
  currentStep,
  formSettings,
})

export default connect(mapStateToProps)(FormContainer)
