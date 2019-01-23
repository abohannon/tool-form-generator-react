import React, { Component } from 'react';
import { merge, isEmpty, cloneDeep } from 'lodash'
import FormGenerator from '../components/FormGenerator'
import Button from '../components/Button'
import defaultFormSettings from '../config/defaultFormSettings'
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

      const newObj = cloneDeep(defaultFormSettings)
      console.log(defaultFormSettings === newObj)
      console.log(defaultFormSettings)
      console.log(newObj)

      // this.updateFormState()
    }

    updateFormState = () => {
      const { userFormSettings } = window

      let formSettings = defaultFormSettings

      if (userFormSettings) {
        formSettings = merge(defaultFormSettings, userFormSettings)
      }

      // formatFormSettings(formSettings)

      // this.setState({
      //   formSettings,
      // })
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
      console.log(`submit`, event.target)
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
      const { formSettings, currentStep } = this.state
      const { button } = formSettings.steps[currentStep]

      if (button) {
        return (
          <button
            className="btn btn-primary"
            type={button.type}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        )
      }

      return null
    }

    render() {
      const { currentStep, formSettings, ...values } = this.state

      if (isEmpty(formSettings)) return `Loading...`

      return (
        <div>
          <form
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
              {this.renderPrimaryButton()}
            </div>
          </form>
        </div>
      );
    }
}

export default FormContainer
