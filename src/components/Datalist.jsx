import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const Datalist = (props) => {
  const { list, ...rest } = props

  return (
    <Fragment>
      <Input list={props.name} {...rest} />

      <datalist id={props.name}>
        { list.map(item => <option value={item} />) }
      </datalist>
    </Fragment>
  )
}

export default Datalist
