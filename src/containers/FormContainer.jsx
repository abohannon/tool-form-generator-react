import React, { Component } from 'react';
import FormGenerator from '../components/FormGenerator'
import Button from '../components/Button'

class FormContainer extends Component {
    state = {
      form: {
        currentStep: 0,
      }
    }

    componentDidMount() {
      this.saveFormSettingsinState();
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

    handleInput = (event) => {
      const { target } = event
      const { name, value } = target

      this.setState({
        [name]: value
      }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log(`submit`)
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
            <Button color={currentButton.color}>
              {currentButton.value}
            </Button>
          </form>
        </div>
      );
    }
}

export default FormContainer
