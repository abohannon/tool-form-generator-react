import React, { Component, Fragment } from 'react';
import { merge } from 'lodash'
import { Form } from 'reactstrap'
import defaultFormSettings from '../config/formSettings'
import ButtonControl from '../components/ButtonControl'
import Field from '../components/Field'

// Utilities
import externalEventListener from '../util/externalEventListener'
import { formatFormSettings } from '../util/utils'

class FormContainer extends Component {
    state = {
      currentStep: 0,
      formSettings: {},
      isValidated: false,
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
      const { currentStep, isValidated, formSettings: { steps } } = this.state

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

    render() {
      const { currentStep, formSettings, isValidated, ...values } = this.state
      const { steps } = formSettings

      if (!steps) return null

      const { fieldSets } = steps[currentStep]

      return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        { fieldSets.map((fieldSet, index) => {
          const { title, description, fields } = fieldSet

          return (
            <Fragment key={title}>
              { title && <h1>{title}</h1> }
              { description && <p>{description}</p> }
              { fields.map((field) => {
                const { name } = field
                return (
                  <Field
                    key={name}
                    onChange={this.handleInput}
                    value={values[name]}
                    values={values}
                    {...field}
                  />
                )
              })}
            </Fragment>
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
