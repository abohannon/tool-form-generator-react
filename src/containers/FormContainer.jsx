import React, { Component } from 'react';
import FormGenerator from '../components/FormGenerator'
import Button from '../components/Button'

// Utilities
import externalEventListener from '../util/externalEventListener'

class FormContainer extends Component {
    state = {
      form: {
        currentStep: 0,
      }
    }

    componentDidMount() {
      this.saveFormSettingsinState();

      externalEventListener()
    }

    saveFormSettingsinState = () => {
      let formSettings

      if (window.formSettings) {
        formSettings = window.formSettings
      } else {
        // fetch JSON from CMS or config file
      }

      const { form } = this.state

      const newState = { ...form, formSettings }

      this.setState({
        form: newState
      });
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

      const {
        form,
        form: { formSettings, currentStep },
        ...values
      } = this.state

      const lastStep = formSettings.steps.length - 1

      if (currentStep !== lastStep) {
        this.nextStep()
      } else {
        console.log(`submit:`, values)
      }
    }

    nextStep = () => {
      this.setState(prevState => ({
        form: {
          currentStep: prevState.form.currentStep + 1,
          formSettings: prevState.form.formSettings
        }
      }))
    }

    prevStep = () => {
      this.setState(prevState => ({
        form: {
          currentStep: prevState.form.currentStep - 1,
          formSettings: prevState.form.formSettings
        }
      }))
    }

    render() {
      const { form: { formSettings, currentStep }, ...values } = this.state

      if (!formSettings) return `Loading...`

      const { steps } = formSettings
      const currentButton = steps[currentStep].button

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
              { currentStep > 0
                && <Button className="btn" type="button" onClick={this.prevStep}>Back</Button>
                }
              <Button color={currentButton.color}>
                {currentButton.value}
              </Button>
            </div>
          </form>
        </div>
      );
    }
}

export default FormContainer
