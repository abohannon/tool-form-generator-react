import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './common/Button'

class ButtonControl extends Component {
  state = {}

  render() {
    return (
      <div className="d-flex justify-content-between">
        <Button label="Continue" />
      </div>
    )
  }
}

export default ButtonControl
