import React, { Component } from 'react';
import FormContainer from './FormContainer'

class AppContainer extends Component {
  onFormSubmit() {
    console.log(`form submitted`);
  }

  render() {
    return (
      <div className="app-container">
        <FormContainer />
      </div>
    );
  }
}
export default AppContainer;
