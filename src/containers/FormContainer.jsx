import React, { Component } from 'react';
import { merge, isEmpty } from 'lodash'
import { Form } from 'reactstrap'
import FormGenerator from '../components/FormGenerator'
import Button from '../components/Button'
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

    renderBackButton = () => (
      <Button
        className="btn"
        type="button"
        onClick={this.prevStep}
      >
        Back
      </Button>
    )

    renderPrimaryButton = () => {
      const { currentStep, formSettings } = this.state

      if (!isEmpty(formSettings)) {
        const { button } = formSettings.steps[currentStep]

        if (button) {
          return (
            <button
              className="btn btn-primary"
              type="submit"
            >
              {button.label}
            </button>
          )
        }

        return null
      }
    }

    render() {
      const { currentStep, formSettings, ...values } = this.state

      return (
        <div>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FormGenerator
              formSettings={formSettings}
              currentStep={currentStep}
              handleInput={this.handleInput}
              values={values}
            />
            <div className="d-flex justify-content-between">
              { currentStep > 0 && this.renderBackButton() }
              { this.renderPrimaryButton() }
            </div>
          </Form>
        </div>
      );
    }
}

export default FormContainer
