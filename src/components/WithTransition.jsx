import React, { Component } from 'react'
import { Collapse } from 'reactstrap'

class WithTransition extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = (target) => {
    console.log(target)
    console.log(this.props.id)
  }

  render() {
  const { isOpen } = this.state
  const { transition, handleTransition, id } = this.props

  const transitionProps = {
    toggleCollapse: (target) => handleTransition(target, this.toggleCollapse),
    id,
  }

   switch (transition) {
    case 'collapse': {
      return (
        <Collapse isOpen={isOpen}>
          {this.props.render(transitionProps)}
        </Collapse>
      )
    }
    default:
      return this.props.render(transitionProps)
  }
  }
}

export default WithTransition



