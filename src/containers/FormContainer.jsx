import React, { Component } from 'react';
import { merge } from 'lodash'
import { Form, FormGroup } from 'reactstrap'
import defaultFormSettings from '../config/formSettings'
import ButtonControl from '../components/ButtonControl'
import Field from '../components/Field'
import FieldSet from '../components/FieldSet'
import WithTransition from '../components/WithTransition'

// Utilities
import externalEventListener from '../util/externalEventListener'
import { formatFormSettings } from '../util/utils'

class FormContainer extends Component {
    state = {
      currentStep: 0,
      formSettings: {},
      isValidated: false,
      collapsed: [],
    }

    componentDidMount() {
      // attach event listeners to external fields we need
      externalEventListener()

      // if user passes in settings from outside the component, merge those with the default form settings
      let formSettings = defaultFormSettings

      if (window && window.userFormSettings) {
        const { userFormSettings } = window
        formSettings = merge(defaultFormSettings, userFormSettings)
      }

      // format the form settings object for the FormGenerator
      const newFormSettings = formatFormSettings(formSettings)

      this.saveFormSettingsState(newFormSettings)
    }

    saveFormSettingsState = (formSettings) => {
      this.setState({
        formSettings,
      })
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
      const { currentStep, formSettings: { steps } } = this.state

      const notFinalStep = currentStep < steps.length - 1

      if (notFinalStep) {
        this.nextStep()
      } else {
        console.log('SUBMIT', this.state)
      }
    }

    nextStep = () => {
      this.setState(prevState => ({
        currentStep: prevState.currentStep + 1,
      }))
    }

    prevStep = () => {
      this.setState(prevState => ({
        currentStep: prevState.currentStep - 1,
      }))
    }

    handleTransition = (target, callback) => {
      callback(target)
    }

    render() {
      const { currentStep, formSettings, isValidated, ...values } = this.state
      const { steps } = formSettings

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
          currentStep={currentStep}
          steps={steps}
          handlePrevStep={this.prevStep}
          handleNextStep={this.nextStep}
          handleCheckout={this.handleCheckout}
        />
        </Form>
      </div>
      );
    }
}

export default FormContainer
