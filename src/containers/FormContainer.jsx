import React, { Component } from 'react';
import { merge } from 'lodash'
import FormGenerator from '../components/FormGenerator'
import ButtonControl from '../components/ButtonControl'
import defaultFormSettings from '../config/formSettings'
// Utilities
import externalEventListener from '../util/externalEventListener'
import { formatFormSettings } from '../util/utils'

class FormContainer extends Component {
    state = {
      currentStep: 0,
      formSettings: {},
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

    handleExternalInput = (name, value) => {
      this.setState({ [name]: value })
    }

    handleInput = (event) => {
      const { target } = event
      const { name, value } = target

      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const { currentStep, formSettings: { steps } } = this.state

      if (currentStep < steps.length - 1) {
        this.nextStep()
      }

      console.log(this.state)
    }

    handleCheckout = () => {
      console.log(`checkout`)
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

    render() {
      const { currentStep, formSettings, ...values } = this.state
      const { steps } = formSettings

      return (
        <div>
          <FormGenerator
            formSettings={formSettings}
            currentStep={currentStep}
            handleInput={this.handleInput}
            values={values}
          />
          <ButtonControl
            currentStep={currentStep}
            steps={steps}
            handlePrevStep={this.prevStep}
            handleNextStep={this.nextStep}
            handleCheckout={this.handleCheckout}
          />
        </div>
      );
    }
}

export default FormContainer
